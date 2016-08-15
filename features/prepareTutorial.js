"use strict";
const fs = require('fs');
var Diff2Html = require('diff2html').Diff2Html;
var Git = require("nodegit");
function processTutorial() {
    var files = [];
    var _files = getFiles('./features/tutorial/patches', files);
    for (let path of _files) {
        fs.readFile(path, 'utf8', function (err, data) {
            if (err) {
                throw err;
            }
            var content = Diff2Html.getPrettyHtml(data, { outputFormat: 'side-by-side' });
            writeFile(content, path);
        });
    }
}
exports.processTutorial = processTutorial;
function getFiles(path, files) {
    fs.readdirSync(path).forEach(function (file) {
        var subpath = path + '/' + file;
        if (fs.lstatSync(subpath).isDirectory()) {
            getFiles(subpath, files);
        }
        else {
            files.push(path + '/' + file);
        }
    });
    return files;
}
function writeFile(content, fileName) {
    //extract the destination
    var _fileName = fileName.substring(29, fileName.length - 6);
    _fileName = _fileName.substr(9, 3);
    _fileName = './features/tutorial/diffs/' + _fileName + '.html';
    fs.writeFileSync(_fileName, content);
}
function prepareDiffs() {
    var patt = new RegExp('[0-9].[0-9]');
    var results = [];
    // *** Note we're returning the result of the promise chain
    return Git.Repository.open("features/tutorial") // Open the repository directory.
        .then(function (repo) {
        return repo.getMasterCommit();
    })
        .then(function (firstCommitOnMaster) {
        // *** Create and return a promise
        return new Promise(function (resolve, reject) {
            var history = firstCommitOnMaster.history(); // Create a new history event emitter.
            history
                .on("commit", function (commit) {
                var entry = new Commit();
                entry.hash = commit.sha();
                var step = patt.exec(commit.message());
                if (step !== null) {
                    entry.step = step.toString();
                }
                results.push(entry);
            })
                .on("end", function () {
                // *** Resolve the promise
                resolve(results);
            });
            history.start(); // Start emitting events.
        });
    });
}
exports.prepareDiffs = prepareDiffs;
class Commit {
}
function genGit() {
    prepareDiffs()
        .then(function (result) {
        for (let commit of result) {
            if (commit.step !== undefined) {
                fs.writeFileSync('features/git/' + commit.step + '.txt', commit.hash);
            }
        }
    });
}
exports.genGit = genGit;
//# sourceMappingURL=prepareTutorial.js.map