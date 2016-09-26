import { Component } from '@angular/core';
import { UiService } from './service/ui.service';
import { AuthService } from './service/auth.service';
@Component({
  selector: 'my-app',
  template: `
  <sidebar *ngIf="showHeader"></sidebar>
  <router-outlet></router-outlet>`
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