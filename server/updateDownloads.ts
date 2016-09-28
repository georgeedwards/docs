import { plugin } from './models/plugin';
const https = require('https');
import * as request from 'request';

/**
 * Checks npm for lastest download data and update DB
 */
export function updateDownloads() {
    plugin.find(function (err, plugins: Array<any>) {
        for (let plugin of plugins) {
            var url = 'https://api.npmjs.org/downloads/point/last-month/' + plugin.package;

            request(url, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    if (body && typeof body == "string") {
                        body = JSON.parse(body);
                    }
                    console.log(body.downloads);
                    console.log(updateDB(plugin._id, body.downloads));
                }
            });
        }
    })
}

/**
 * Add new download data to database
 * @constructor
 * @param {string} id - the id of the database document
 * @param {string} _downloads - the number of monthly downloads to add the the db document
 */
function updateDB(id: string, _downloads: string) {
    plugin.findOneAndUpdate({ _id: id }, { downloads: _downloads }, { upsert: true }, function (err, doc) {
        if (err) return "error: " + err;
        return "succesfully saved";
    });
}