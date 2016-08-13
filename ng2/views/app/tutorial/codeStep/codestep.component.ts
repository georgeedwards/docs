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
        this.sub = this.route.params.subscribe(params => {
            var id: string = params['id'];
            this.content = id;
            var that = this;
            var _url = './chapter/' + params['id'] + '.html';
            $.ajax({
                url: _url,
                success: function (result) {
                    that.content = result;
                }
            });
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
