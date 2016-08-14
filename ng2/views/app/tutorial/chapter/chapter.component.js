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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var codestep_component_1 = require('../codeStep/codestep.component');
var chapterComponent = (function () {
    function chapterComponent(route) {
        this.route = route;
        this.content = '';
    }
    chapterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.content = id;
            var that = _this;
            var _url = './chapter/' + params['id'] + '.html';
            $.ajax({
                url: _url,
                success: function (result) {
                    that.content = result;
                }
            });
        });
    };
    chapterComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    chapterComponent = __decorate([
        //Jquery declare
        core_1.Component({
            selector: 'chapter',
            template: "<div [innerHTML]=\"content\"></div>",
            styleUrls: ['./app/tutorial/chapter/chapter.css'],
            directives: [codestep_component_1.codeStepComponent]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], chapterComponent);
    return chapterComponent;
}());
exports.chapterComponent = chapterComponent;
//# sourceMappingURL=chapter.component.js.map