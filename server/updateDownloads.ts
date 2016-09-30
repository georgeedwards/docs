import { plugin } from './models/plugin';
const https = require('https');
import * as request from 'request';
import * as schedule from 'node-schedule';


/**
 * Setup the download stats to update daily from npm
 */
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
            var url = 'https://api.npmjs.org/downloads/point/last-month/' + plugin.package_name;
            request(url, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    if (body && typeof body == "string") {
                        body = JSON.parse(body);
                    }
                    console.log(url);
                    console.log(body.downloads);
                    updateDB(plugin._id, 'downloads', body.downloads);
                }

            });
            console.log('Desc: ' + plugin.description);
            if (plugin.description == undefined) {
                console.log("Setting Version and Description");
                let url = 'https://registry.npmjs.org/' + plugin.package_name + '/latest';
                request(url, function (error, response, body) {
                    if (!error && response.statusCode == 200) {
                        if (body && typeof body == "string") {
                            body = JSON.parse(body);
                        }
                        console.log('Desc: ' + body.description);
                        updateDB(plugin._id, 'description', body.description);
                        updateDB(plugin._id, 'version', body.version);
                    }

                });
            }
        }
    })
}


/**
 * Add new download data to database
 * @constructor
 * @param {string} id - the id of the database document
 * @param {string} _downloads - the number of monthly downloads to add the the db document
 */
function updateDB(id: string, property: string, value: string) {
    if (property == 'downloads') {
        plugin.findOneAndUpdate({ _id: id }, { downloads: value }, { upsert: true }, function (err, doc) {
            if (err) return "error: " + err;
            return "succesfully saved";
        });
    } else if (property == 'description') {
        plugin.findOneAndUpdate({ _id: id }, { description: value }, { upsert: true }, function (err, doc) {
            if (err) return "error: " + err;
            return "succesfully saved";
        });
    } else if (property == 'version') {
        plugin.findOneAndUpdate({ _id: id }, { version: value }, { upsert: true }, function (err, doc) {
            if (err) return "error: " + err;
            return "succesfully saved";
        });
    }
    return "error";
}