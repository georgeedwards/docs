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
const angular2_jwt_1 = require('angular2-jwt');
// Avoid name not found warnings
let AuthService = class AuthService {
    constructor() {
        // Configure Auth0
        this.lock = new Auth0Lock('gZ27aPXK1cCU0j4bauKiTZM5QFC8y9HO', 'tns.auth0.com', {});
        // Add callback for lock `authenticated` event
        this.lock.on("authenticated", (authResult) => {
            localStorage.setItem('id_token', authResult.idToken);
        });
    }
    login() {
        // Call the show method to display the widget.
        this.lock.show();
    }
    ;
    authenticated() {
        // Check if there's an unexpired JWT
        // This searches for an item in localStorage with key == 'id_token'
        return angular2_jwt_1.tokenNotExpired();
    }
    ;
    logout() {
        // Remove token from localStorage
        localStorage.removeItem('id_token');
    }
    ;
};
AuthService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map