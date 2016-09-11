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
const router_1 = require('@angular/router');
let tutorialComponent = class tutorialComponent {
    constructor(uiService, route, router) {
        this.uiService = uiService;
        this.route = route;
        this.router = router;
        this.chapters = _chapters;
        this.clickedItem = 0;
        this.shas = {
            '1': '95854756de842ff45ebbf9d3703cc7eff1557d5a',
            '2': '13b948cc246b3c9b383c4be24ca0ba0a7c072e67',
            '3': 'd29ae903c17e342423ac30fe4c5d10dc65876c18',
            '4': 'd5d37719e5768b54be28183d57a14c0f2863ccbe',
            '5': '2a501710baa09e53af27388a364246656d2de782',
            '6': '2080f0bf0acc61628909df340aa03ead722a42c8'
        };
        this.uiService.changeNavState(true); //display nav bars
        this.route.params.forEach(p => this.doScroll());
        this.uiService.chapter.forEach(c => { this.clickedItem = c; });
    }
    doScroll() {
        if (this.chapter !== undefined) {
            this.chapter.nativeElement.scrollTop = 0;
        }
    }
    previous() {
        if (this.clickedItem !== 0) {
            var previous = this.clickedItem - 1;
            console.log(previous);
            let link = ['/tutorial/chapter', previous];
            this.router.navigate(link);
        }
    }
    next() {
        if (this.clickedItem !== 6) {
            var next = this.clickedItem + 1;
            console.log(next);
            let link = ['/tutorial/chapter', next];
            this.router.navigate(link);
        }
    }
    isStart() {
        if (this.clickedItem == 0) {
            return 'grey';
        }
    }
    isEnd() {
        if (this.clickedItem == 6) {
            return 'grey';
        }
    }
};
__decorate([
    core_1.ViewChild('chapter'), 
    __metadata('design:type', Object)
], tutorialComponent.prototype, "chapter", void 0);
tutorialComponent = __decorate([
    core_1.Component({
        selector: 'tutorial',
        templateUrl: 'app/tutorial/tutorial.html',
        styleUrls: ['./app/tutorial/tutorial.css'],
        encapsulation: core_1.ViewEncapsulation.None
    }), 
    __metadata('design:paramtypes', [ui_service_1.UiService, router_1.ActivatedRoute, router_1.Router])
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