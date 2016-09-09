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
let chapterComponent = class chapterComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.content = '';
        /* Shouldn't be statically defined */
        this.shas = {
            '1': '95854756de842ff45ebbf9d3703cc7eff1557d5a',
            '2': '13b948cc246b3c9b383c4be24ca0ba0a7c072e67',
            '3': 'd29ae903c17e342423ac30fe4c5d10dc65876c18',
            '4': 'd5d37719e5768b54be28183d57a14c0f2863ccbe',
            '5': '2a501710baa09e53af27388a364246656d2de782',
            '6': '2080f0bf0acc61628909df340aa03ead722a42c8'
        };
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
        styleUrls: ['./app/tutorial/chapter/chapter.css']
    }), 
    __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router])
], chapterComponent);
exports.chapterComponent = chapterComponent;
//# sourceMappingURL=chapter.component.js.map