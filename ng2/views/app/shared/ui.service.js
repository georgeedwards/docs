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
const Subject_1 = require('rxjs/Subject');
let UiService = class UiService {
    constructor() {
        // Observable boolean sources
        this.navStateSource = new Subject_1.Subject();
        this._chapter = new Subject_1.Subject();
        // Observable boolean streams
        this.navState$ = this.navStateSource.asObservable();
        this.chapter = this._chapter.asObservable();
    }
    // Service message commands
    changeNavState(showNav) {
        this.navStateSource.next(showNav);
    }
    changeChapter(chapter) {
        this._chapter.next(chapter);
    }
};
UiService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [])
], UiService);
exports.UiService = UiService;
//# sourceMappingURL=ui.service.js.map