"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const home_component_1 = require('./home/home.component');
const sidebar_component_1 = require('./sidebar/sidebar.component');
const navbar_component_1 = require('./navbar/navbar.component');
const ui_service_1 = require('./shared/ui.service');
let AppComponent = class AppComponent {
    constructor(missionService) {
        this.missionService = missionService;
        this.showHeader = false;
        this.missionService.changeNavState(false);
        missionService.navState$.subscribe(showNav => {
            this.showHeader = showNav;
        });
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: `
  <sidebar *ngIf="showHeader"></sidebar>
  <router-outlet></router-outlet>`,
        directives: [home_component_1.homeComponent, sidebar_component_1.sidebarComponent, navbar_component_1.navbarComponent]
    }), 
    __metadata('design:paramtypes', [ui_service_1.UiService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map