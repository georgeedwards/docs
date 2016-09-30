import { Injectable } from "@angular/core";
import { AuthHttp } from "angular2-jwt";
import { Response, Http } from "@angular/http";
import "rxjs/add/operator/map";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

    constructor(private authHttp: AuthHttp, private http: Http) { }

    get(url: string) {
        return this.http
            .get(url)
            .toPromise()
            .catch(this.handleError);
    }

    sec_get(url: string) {
        return this.http
            .get(url)
            .map((response: Response) => response.json());
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
