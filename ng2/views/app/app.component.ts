import { Component } from '@angular/core';
import { sidebarComponent } from './sidebar/sidebar.component';
import { navbarComponent } from './navbar/navbar.component';
import { homeComponent } from './home/home.component';
import { tutorialComponent } from './tutorial/tutorial.component';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
  <sidebar></sidebar>
  <navbar></navbar>
  <router-outlet></router-outlet>`,
  directives: [sidebarComponent, navbarComponent, homeComponent]
})
export class AppComponent { }
