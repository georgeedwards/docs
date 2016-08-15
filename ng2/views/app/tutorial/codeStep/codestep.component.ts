import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import {SafeResourceUrl} from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'codestep',
    template: `<div class="codestep" [innerHTML]="content"></div>`
})
export class codeStepComponent {
    @Input() step: string;
    errorMessage: string;
    private content: string = '';
    //private chapterURL;
    private chapterURL = 'git/2.1.txt';  // URL to web API

    constructor(private route: ActivatedRoute, private http: Http) { }

    ngOnInit() {
        this.chapterURL = './diff/' + this.step + '.html';
        this.getChapter()
            .subscribe(
            chapterContent => this.content = chapterContent,
            error => this.errorMessage = <any>error);
    }

    getChapter(): Observable<any> {
        return this.http.get(this.chapterURL)
            .map(this.extractData)
            .catch(this.handleError);
    }
    private extractData(res: Res) {
        let body = res._body;
        return body;
    }
    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}

/*
https://github.com/georgeedwards/ns-tutorial/archive/a70e6f556640db53f1ef3acba28c42f582d45890.zip
*/
interface Res extends Response {
    _body: string;
}