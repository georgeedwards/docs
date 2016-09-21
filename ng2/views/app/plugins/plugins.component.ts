import { Component } from '@angular/core';
import { UiService} from '../shared/ui.service';
import { AuthService} from '../shared/auth.service';
import {AuthHttp} from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Component({
  selector: 'home',
  templateUrl: 'app/plugins/plugins.html',
  styleUrls: ['app/plugins/plugins.css']
})
export class pluginsComponent {
  messages: string;

  constructor(private uiService: UiService, private auth: AuthService, private authHttp: AuthHttp) {
    this.uiService.changeNavState(true); //show nav bars
  }

  public securedPing() {
    this.authHttp.get(`http://localhost:3000/api/plugins`)
      .map(res => res.json())
      .subscribe(
      data => console.log(data),
      error => this.messages = error._body || error
      );
  }
}
