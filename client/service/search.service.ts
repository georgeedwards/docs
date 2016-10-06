import { Injectable } from '@angular/core';
import * as elasticsearch from 'elasticsearch';
//declare var elasticsearch: any;

@Injectable()
export class searchService {
    private _client: elasticsearch.Client;
    constructor() {
        var connectionString = 'https://paas:2664f39b6a927d0873b43fab6893ace6@bifur-eu-west-1.searchly.com';
        this._client = new elasticsearch.Client({ host: connectionString, log: 'trace' });
    }

    search(term: string): any {
        return this._client.search({
            index: 'plugins',
            type: 'ds044699_mlab_com_cdc1',
            body: {
                query: {
                    multi_match: {
                        query: term,
                        fields: ['name', 'description']
                    }
                }
            }
        });

    }

}
