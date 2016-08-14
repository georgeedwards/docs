import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import {SafeResourceUrl} from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
declare var $: any; //Jquery declare

@Component({
    selector: 'codestep',
    template: `<div class="codestep" [innerHTML]="content"></div>`
})
export class codeStepComponent {
    @Input() step: string;
    private sub: Subscription;
    private content: string = '';
    private url: SafeResourceUrl;

    constructor(private route: ActivatedRoute) { }

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
}

/*
https://github.com/georgeedwards/ns-tutorial/archive/a70e6f556640db53f1ef3acba28c42f582d45890.zip
*/