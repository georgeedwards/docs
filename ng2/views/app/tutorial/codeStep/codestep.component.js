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
let codeStepComponent = class codeStepComponent {
    constructor(route) {
        this.route = route;
        this.content = '';
    }
    ngOnInit() {
        console.log("HERE");
        this.sub = this.route.params.subscribe(params => {
            this.content = this.step;
            var that = this;
            var _url = './diff/' + this.step + '.html';
            $.ajax({
                url: _url,
                success: function (result) {
                    that.content = result;
                    console.log("content: " + result);
                }
            });
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', String)
], codeStepComponent.prototype, "step", void 0);
codeStepComponent = __decorate([
    //Jquery declare
    core_1.Component({
        selector: 'codestep',
        template: `<div class="codestep" [innerHTML]="content"></div>`
    }), 
    __metadata('design:paramtypes', [router_1.ActivatedRoute])
], codeStepComponent);
exports.codeStepComponent = codeStepComponent;
/*
https://github.com/georgeedwards/ns-tutorial/archive/a70e6f556640db53f1ef3acba28c42f582d45890.zip
*/ 
//# sourceMappingURL=codestep.component.js.map