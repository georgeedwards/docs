import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/RX';

@Injectable()
export class TutorialService {
    constructor(private http: Http) { }

    getContents(url: string): Observable<any> {
        return this.http.get(url)
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

interface Res extends Response {
    _body: string;
}

