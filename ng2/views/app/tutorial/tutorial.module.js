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
const common_1 = require('@angular/common');
const tutorial_routes_1 = require('./tutorial.routes');
const http_1 = require('@angular/http');
const tutorial_service_1 = require('../shared/tutorial.service');
const tutorial_component_1 = require('./tutorial.component');
const chapter_component_1 = require('./chapter/chapter.component');
const http_pipe_1 = require('../shared/http.pipe');
let tutorialModule = class tutorialModule {
};
tutorialModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            tutorial_routes_1.tutorialRouting,
            http_1.HttpModule
        ],
        declarations: [
            tutorial_component_1.tutorialComponent,
            chapter_component_1.chapterComponent,
            http_pipe_1.RawHtmlPipe
        ],
        providers: [tutorial_service_1.TutorialService]
    }), 
    __metadata('design:paramtypes', [])
], tutorialModule);
exports.tutorialModule = tutorialModule;
//# sourceMappingURL=tutorial.module.js.map