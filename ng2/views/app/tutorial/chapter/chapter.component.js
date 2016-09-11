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
const ui_service_1 = require('../../shared/ui.service');
let chapterComponent = class chapterComponent {
    constructor(route, router, uiService) {
        this.route = route;
        this.router = router;
        this.uiService = uiService;
        this.content = '';
        this.route.params.forEach(p => this.updateChapter(+p['id']));
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.chapter = params['id'];
            //this.uiService.chapters = params['id'];
            //this.updateChapter(params['id']);
        });
        console.log("INIT");
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    updateChapter(chapter) {
        this.uiService.changeChapter(chapter);
        console.log("Called");
    }
};
chapterComponent = __decorate([
    core_1.Component({
        selector: 'chapter',
        templateUrl: 'app/tutorial/chapter/chapter.html',
        styleUrls: ['./app/tutorial/chapter/chapter.css']
    }), 
    __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, ui_service_1.UiService])
], chapterComponent);
exports.chapterComponent = chapterComponent;
//# sourceMappingURL=chapter.component.js.map