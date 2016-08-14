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
    // Open the repository directory.
    Git.Repository.open("features/tutorial")
        .then(function (repo) {
        return repo.getMasterCommit();
    })
        .then(function (firstCommitOnMaster) {
        // Create a new history event emitter.
        var history = firstCommitOnMaster.history();
        // Listen for commit events from the history.
        history.on("commit", function (commit) {
            var entry = new Commit();
            entry.hash = commit.sha();
            var step = patt.exec(commit.message());
            if (step !== null) {
                entry.step = step.toString();
            }
            console.log(entry.step);
            results.push(entry);
        });
        // Start emitting events.
        history.start();
        console.log("return");
    });
}
exports.prepareDiffs = prepareDiffs;
class Commit {
}
//# sourceMappingURL=prepareTutorial.js.map