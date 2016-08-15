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
const tutorial_service_1 = require('../../shared/tutorial.service');
let codeStepComponent = class codeStepComponent {
    constructor(tutorialService) {
        this.tutorialService = tutorialService;
        this.content = '';
        //private chapterURL;
        this.chapterURL = 'git/2.1.txt'; // URL to web API
    }
    ngOnInit() {
        this.chapterURL = './diff/' + this.step + '.html';
        this.tutorialService.getContents(this.chapterURL)
            .subscribe(diffStep => this.content = diffStep, error => this.errorMessage = error);
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', String)
], codeStepComponent.prototype, "step", void 0);
codeStepComponent = __decorate([
    core_1.Component({
        selector: 'codestep',
        template: `<div class="codestep" [innerHTML]="content"></div>`
    }), 
    __metadata('design:paramtypes', [tutorial_service_1.TutorialService])
], codeStepComponent);
exports.codeStepComponent = codeStepComponent;
//# sourceMappingURL=codestep.component.js.map