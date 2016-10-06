import { Component, ViewChild, ElementRef } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { UiService } from '../../service/ui.service';
import { AuthService } from '../../service/auth.service';
import { ApiService } from '../../service/api.service';
import { searchService } from '../../service/search.service';
import { AuthHttp } from 'angular2-jwt';
import { Plugin } from './plugin';
import 'rxjs/add/operator/map';
import { Observable }       from 'rxjs/Observable';
import { Subject }          from 'rxjs/Subject';

declare var $: any;
//import elasticsearch from 'elasticsearch';
declare var elasticsearch: any;

@Component({
  selector: 'home',
  templateUrl: 'client/components/plugins/plugins.html',
  styleUrls: ['client/components/plugins/plugins.css']
})
export class pluginsComponent {
  messages: string;
  @ViewChild('modal') el: ElementRef;
  model = new Plugin('Bluetooth', 'nativescript-bluetooth', 'gitHubUsername', false, false);
  plugins: Array<Plugin>;

  constructor(private uiService: UiService, private auth: AuthService, private authHttp: AuthHttp, private api: ApiService, private search: searchService) {
    this.uiService.changeNavState(true); //show nav bars
    this.api.get('/api/plugins')
      .then((res) => this.plugins = res) //set components plugins to the result
      .then((a) => this.plugins.sort(compare)); //sort by downloads
    this.search.search('Bluetooth')
      .then(function (resp) {
        var hits = resp.hits.hits;
      }, function (err) {
        console.trace(err.message);
      });
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
}

function compare(a, b) {
  if (a.downloads > b.downloads)
    return -1;
  if (a.downloads < b.downloads)
    return 1;
  return 0;
}