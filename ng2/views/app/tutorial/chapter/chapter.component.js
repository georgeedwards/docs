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
const codestep_component_1 = require('../codeStep/codestep.component');
const tutorial_service_1 = require('../../shared/tutorial.service');
let chapterComponent = class chapterComponent {
    constructor(route, tutorialService) {
        this.route = route;
        this.tutorialService = tutorialService;
        this.content = '';
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            var url = './chapter/' + params['id'] + '.html';
            this.tutorialService.getContents(url)
                .subscribe(chapterContent => this.content = chapterContent, error => this.errorMessage = error);
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
};
chapterComponent = __decorate([
    core_1.Component({
        selector: 'chapter',
        template: `<div [innerHTML]="content"></div>`,
        styleUrls: ['./app/tutorial/chapter/chapter.css'],
        directives: [codestep_component_1.codeStepComponent]
    }), 
    __metadata('design:paramtypes', [router_1.ActivatedRoute, tutorial_service_1.TutorialService])
], chapterComponent);
exports.chapterComponent = chapterComponent;
//# sourceMappingURL=chapter.component.js.map