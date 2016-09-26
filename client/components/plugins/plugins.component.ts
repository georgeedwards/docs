import { Component } from '@angular/core';
import { UiService} from '../../service/ui.service';
import { AuthService} from '../../service/auth.service';
import {AuthHttp} from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Component({
  selector: 'home',
  templateUrl: 'client/components/plugins/plugins.html',
  styleUrls: ['client/components/plugins/plugins.css']
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
  public add(){
    console.log("HERE");
    if(!this.auth.authenticated()){
      console.log("Not Logged in");
      this.auth.login();
    }
  }
}
