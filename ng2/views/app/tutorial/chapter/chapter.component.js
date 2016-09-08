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
let chapterComponent = class chapterComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.content = '';
        this.route.params.forEach(p => this.doScroll());
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.chapter = params['id'];
        });
        console.log("INIT");
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    previous() {
        if (this.chapter !== '0') {
            var previous = parseInt(this.chapter) - 1;
            console.log(previous);
            let link = ['/tutorial/chapter', previous];
            this.router.navigate(link);
        }
    }
    next() {
        if (this.chapter !== '6') {
            var next = parseInt(this.chapter) + 1;
            console.log(next);
            let link = ['/tutorial/chapter', next];
            this.router.navigate(link);
        }
    }
    isStart() {
        if (this.chapter == '0') {
            return 'grey';
        }
    }
    isEnd() {
        if (this.chapter == '6') {
            return 'grey';
        }
    }
    doScroll() {
    }
};
chapterComponent = __decorate([
    core_1.Component({
        selector: 'chapter',
        templateUrl: 'app/tutorial/chapter/chapter.html',
        styleUrls: ['./app/tutorial/chapter/chapter.css'],
        directives: [codestep_component_1.codeStepComponent]
    }), 
    __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router])
], chapterComponent);
exports.chapterComponent = chapterComponent;
//# sourceMappingURL=chapter.component.js.map