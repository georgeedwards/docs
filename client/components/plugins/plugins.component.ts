import { Component, ViewChild, ElementRef } from '@angular/core';
import { UiService } from '../../service/ui.service';
import { AuthService } from '../../service/auth.service';
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
  submitted = false;

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

  public add() {
    console.log("HERE");
    $(this.el.nativeElement).openModal();
    console.log("Modal" + this.el.nativeElement);
    if (!this.auth.authenticated()) {
      console.log("Not Logged in");
      this.auth.login();
    }
  }
  public submit() {
    console.log('SUBMIT');
  }
  onSubmit() { this.submitted = true; }
  get diagnostic() { return JSON.stringify(this.model); }
}
/*
powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
  */