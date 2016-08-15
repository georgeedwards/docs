import { Component } from '@angular/core';
import { homeComponent } from './home/home.component';
import { tutorialComponent } from './tutorial/tutorial.component';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
  <router-outlet></router-outlet>`,
  directives: [homeComponent]
})
export class AppComponent { }
