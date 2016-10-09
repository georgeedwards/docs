import { Component, ViewChild, ElementRef } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { UiService } from '../../service/ui.service';
import { AuthService } from '../../service/auth.service';
import { ApiService } from '../../service/api.service';
import { searchService } from '../../service/search.service';
import { AuthHttp } from 'angular2-jwt';
import { Plugin } from './plugin';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';

declare var $: any;
//import elasticsearch from 'elasticsearch';
declare var elasticsearch: any;

@Component({
  selector: 'home',
  templateUrl: '../../../client/components/plugins/plugins.html',
  styleUrls: ['../../../client/components/plugins/plugins.css']
})
export class pluginsComponent {
  messages: string;
  @ViewChild('modal') el: ElementRef;
  searchbox: string = '';
  model = new Plugin('Bluetooth', 'nativescript-bluetooth', 'gitHubUsername', false, false);
  plugins: Array<Plugin>;
  _client: any;
  private searchTermStream = new Subject<string>();

  items: Observable<string[]> = this.searchTermStream
    .debounceTime(300)
    .distinctUntilChanged()
    .switchMap((term: string) => this._searchService.search(term));

  constructor(private uiService: UiService, public auth: AuthService, private authHttp: AuthHttp, private api: ApiService, private _searchService: searchService) {
    this.uiService.changeNavState(true); //show nav bars
    this.populatePage();
  }

  public add() {
    if (!this.auth.authenticated()) {
      this.auth.login();
    } else {
      $(this.el.nativeElement).openModal();
    }
  }

  public submit() {
    console.log('SUBMIT');
    var body = this.processSubmission(this.model);
  }

  public onKey(term: string) {
    if (this.searchbox == '') {
      this.populatePage();
    }
    var that = this;
    this._searchService.search(term).then(function (resp:any) {
      that.plugins = [];
      for (var hit of resp.hits.hits) {
        that.plugins.push((hit._source))
      }
    }, function (err: any) {
      console.trace(err.message);
    });
  }

  public empty() {
    this.searchbox = '';
    this.populatePage();
  }

  processSubmission(plugin: Plugin): Plugin {
    plugin.github = 'https://github.com/' + plugin.author + '/' + plugin.package_name;
    this.authHttp.post('/api/plugins', plugin)
      .map(res => res.json())
      .subscribe(
      data => console.log(data),
      error => this.messages = error._body || error
      );
    return plugin;
  }
  populatePage() {
    this.api.get('/api/plugins')
      .then((res) => this.plugins = res) //set components plugins to the result
      .then((a) => this.plugins.sort(compare)); //sort by downloads
  }
}

function compare(a: Plugin, b: Plugin) {
  if (a.downloads > b.downloads)
    return -1;
  if (a.downloads < b.downloads)
    return 1;
  return 0;
}