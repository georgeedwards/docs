import { plugin } from './models/plugin';
const https = require('https');
import * as request from 'request';
import * as schedule from 'node-schedule';

/**
 * Setup the download stats to update daily from npm
 */
/*'0 0 12 1/1 * ? *'*/
export function registerUpdates() {
    /*var j = schedule.scheduleJob('0 0/1 * 1/1 * ? *', function () {
        console.log('The answer to life, the universe, and everything!');
    });*/

    var rule = new schedule.RecurrenceRule();
    rule.hour = 12;
    rule.minute = 0;
    rule.second = 0;

    var j = schedule.scheduleJob(rule, function () {
        updateDownloads();
    });
}
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
                    console.log(url);
                    console.log(body.downloads);
                    updateDB(plugin._id, body.downloads);
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