import { Injectable } from '@angular/core';
import * as elasticsearch from 'elasticsearch';
//declare var elasticsearch: any;

@Injectable()
export class searchService {
    private _client: elasticsearch.Client;
    constructor() {
        var connectionString = 'http://paas:eb2921cd3266a272550dff76be447001@bifur-eu-west-1.searchly.com';
        this._client = new elasticsearch.Client({ host: connectionString, log: 'trace' });
    }

    search(term: string): any {
        return this._client.search({
            index: 'plugins',
            type: 'ds044699_mlab_com_36a0',
            body: {
                query: {
                    match: {
                        name: term
                    }
                }
            }
        });
    }

}
