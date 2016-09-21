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
const ui_service_1 = require('../shared/ui.service');
const auth_service_1 = require('../shared/auth.service');
const angular2_jwt_1 = require('angular2-jwt');
require('rxjs/add/operator/map');
let pluginsComponent = class pluginsComponent {
    constructor(uiService, auth, authHttp) {
        this.uiService = uiService;
        this.auth = auth;
        this.authHttp = authHttp;
        this.uiService.changeNavState(true); //show nav bars
    }
    securedPing() {
        this.authHttp.get(`http://localhost:3000/api/plugins`)
            .map(res => res.json())
            .subscribe(data => console.log(data), error => this.messages = error._body || error);
    }
};
pluginsComponent = __decorate([
    core_1.Component({
        selector: 'home',
        templateUrl: 'app/plugins/plugins.html',
        styleUrls: ['app/plugins/plugins.css']
    }), 
    __metadata('design:paramtypes', [ui_service_1.UiService, auth_service_1.AuthService, angular2_jwt_1.AuthHttp])
], pluginsComponent);
exports.pluginsComponent = pluginsComponent;
//# sourceMappingURL=plugins.component.js.map