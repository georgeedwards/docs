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
const router_1 = require('@angular/router');
const codestep_component_1 = require('./codeStep/codestep.component');
const sidebar_component_1 = require('../sidebar/sidebar.component');
const navbar_component_1 = require('../navbar/navbar.component');
let tutorialComponent = class tutorialComponent {
    constructor() {
        this.chapters = _chapters;
        this.clickedItem = 0;
    }
};
tutorialComponent = __decorate([
    core_1.Component({
        selector: 'tutorial',
        templateUrl: 'app/tutorial/tutorial.html',
        styleUrls: ['./app/tutorial/tutorial.css'],
        directives: [router_1.ROUTER_DIRECTIVES, codestep_component_1.codeStepComponent, sidebar_component_1.sidebarComponent, navbar_component_1.navbarComponent],
        encapsulation: core_1.ViewEncapsulation.None
    }), 
    __metadata('design:paramtypes', [])
], tutorialComponent);
exports.tutorialComponent = tutorialComponent;
const _chapters = [
    { number: '0', title: 'Intro' },
    { number: '1', title: 'Getting Started' },
    { number: '2', title: 'Building the UI' },
    { number: '3', title: 'Application Logic' },
    { number: '4', title: 'Nativescript Modules' },
    { number: '5', title: 'Using Plugins' },
    { number: '6', title: 'Using Native APIs' }
];
class _chapter {
}
exports._chapter = _chapter;
//# sourceMappingURL=tutorial.component.js.map