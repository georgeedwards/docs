import { Component } from '@angular/core';
import { homeComponent } from './home/home.component';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { sidebarComponent } from './sidebar/sidebar.component';
import { navbarComponent } from './navbar/navbar.component';
import { UiService } from './shared/ui.service';

@Component({
  selector: 'my-app',
  template: `
  <sidebar *ngIf="showHeader"></sidebar>
  <navbar *ngIf="showHeader"></navbar>
  <router-outlet></router-outlet>`,
  directives: [homeComponent, sidebarComponent, navbarComponent]
})
export class AppComponent {
  showHeader: boolean = false;

  constructor(private missionService: UiService) {
    this.missionService.changeNavState(false);
    missionService.navState$.subscribe(
      showNav => {
        this.showHeader = showNav;
      });
  }
}
