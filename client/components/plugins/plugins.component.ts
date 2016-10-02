import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { UiService } from '../../service/ui.service';
import { AuthService } from '../../service/auth.service';
import { ApiService } from '../../service/api.service';
import { AuthHttp } from 'angular2-jwt';
import { Plugin } from './plugin';
import 'rxjs/add/operator/map';
declare var $: any;
//import elasticsearch from 'elasticsearch';
declare var elasticsearch: any;

@Component({
  selector: 'home',
  templateUrl: 'client/components/plugins/plugins.html',
  styleUrls: ['client/components/plugins/plugins.css']
})
export class pluginsComponent implements OnInit {
  messages: string;
  @ViewChild('modal') el: ElementRef;
  model = new Plugin('Bluetooth', 'nativescript-bluetooth', 'gitHubUsername', false, false);
  plugins: Array<Plugin>;
  private _client: any// elasticsearch.Client;

  constructor(private uiService: UiService, private auth: AuthService, private authHttp: AuthHttp, private api: ApiService) {
    this.uiService.changeNavState(true); //show nav bars
    this.api.get('/api/plugins')
      .then((res) => this.plugins = res)
      .then((a) => this.plugins.sort(compare));

    function compare(a, b) {
      console.log("comp");
      if (a.downloads > b.downloads)
        return -1;
      if (a.downloads < b.downloads)
        return 1;
      return 0;
    }

    var connectionString = 'http://paas:eb2921cd3266a272550dff76be447001@bifur-eu-west-1.searchly.com';

    this._client = new elasticsearch.Client({ host: connectionString, log: 'trace' });

  }

  ngOnInit() {
    this._client.search({
      index: 'plugins',
      type: '_all',
      body: {
        query: {
          match: {
            name: 'Contacts'
          }
        }
      }
    }).then(function (resp) {
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
    plugin.github = 'http://github.com/' + plugin.author + '/' + plugin.package_name;
    /* TODO Check Github to see if ^ is Valid ? */
    this.authHttp.post('http://localhost:3000/api/plugins', plugin)
      .map(res => res.json())
      .subscribe(
      data => console.log(data),
      error => this.messages = error._body || error
      );
    return plugin;
  }
}