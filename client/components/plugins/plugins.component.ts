import { Component, ViewChild, ElementRef } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { UiService } from '../../service/ui.service';
import { AuthService } from '../../service/auth.service';
import { ApiService } from '../../service/api.service';
import { AuthHttp } from 'angular2-jwt';
import { Plugin } from './plugin';
import 'rxjs/add/operator/map';
declare var $: any;

@Component({
  selector: 'home',
  templateUrl: 'client/components/plugins/plugins.html',
  styleUrls: ['client/components/plugins/plugins.css']
})
export class pluginsComponent {
  messages: string;
  @ViewChild('modal') el: ElementRef;
  model = new Plugin('Bluetooth', 'nativescript-bluetooth', 'gitHubUsername', false, false);

  constructor(private uiService: UiService, private auth: AuthService, private authHttp: AuthHttp, private api: ApiService) {
    this.uiService.changeNavState(true); //show nav bars
  }

  /*public securedPing() {
    this.authHttp.get(`http://localhost:3000/api/plugins`)
      .map(res => res.json())
      .subscribe(
      data => console.log(data),
      error => this.messages = error._body || error
      );
  }
*/
  public add() {
    $(this.el.nativeElement).openModal();
    if (!this.auth.authenticated()) {
      this.auth.login();
    }
  }
  public submit() {
    console.log('SUBMIT');
    var body = this.processSubmission(this.model);
  }

  processSubmission(plugin: Plugin): Plugin {
    plugin.github = 'http://github.com/' + plugin.author + '/' + plugin.package_name;
    /* TODO Check Github to see if ^ is Valid */

    this.authHttp.post('http://localhost:3000/api/plugins', plugin)
      .map(res => res.json())
      .subscribe(
      data => console.log(data),
      error => this.messages = error._body || error
      );
    return plugin;
  }
}
