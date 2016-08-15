import * as fs from 'fs';
var Diff2Html = require('diff2html').Diff2Html;
var Git = require("nodegit");

export function processTutorial() {
    var files = [];
    var _files = getFiles('./features/tutorial/patches', files);

    for (let path of _files) {
        fs.readFile(path, 'utf8', function (err, data) {
            if (err) { throw err; }
            var content = Diff2Html.getPrettyHtml(data, { outputFormat: 'side-by-side' });
            writeFile(content, path);
        });
    }
}

function getFiles(path: string, files: Array<string>): Array<string> {
    fs.readdirSync(path).forEach(function (file) {
        var subpath = path + '/' + file;
        if (fs.lstatSync(subpath).isDirectory()) {
            getFiles(subpath, files);
        } else {
            files.push(path + '/' + file);
        }
    });
    return files;
}

function writeFile(content: string, fileName: string) {
    //extract the destination
    var _fileName = fileName.substring(29, fileName.length - 6);
    _fileName = _fileName.substr(9, 3);
    _fileName = './features/tutorial/diffs/' + _fileName + '.html';
    fs.writeFileSync(_fileName, content);
}

export function prepareDiffs() {
    var patt = new RegExp('[0-9].[0-9]');
    var results: Array<Commit> = [];
    // *** Note we're returning the result of the promise chain
    return Git.Repository.open("features/tutorial") // Open the repository directory.
        .then(function (repo) { // Open the master branch.
            return repo.getMasterCommit();
        })
        .then(function (firstCommitOnMaster) { // Display information about commits on master.
            // *** Create and return a promise
            return new Promise(function (resolve, reject) {
                var history = firstCommitOnMaster.history(); // Create a new history event emitter.

                history
                    .on("commit", function (commit) { // Listen for commit events from the history.
                        var entry = new Commit();

                        entry.hash = commit.sha();
                        var step = patt.exec(commit.message());

                        if (step !== null) {
                            entry.step = step.toString();
                        }
                        results.push(entry);
                    })
                    .on("end", function () { // *** Listen for the end
                        // *** Resolve the promise
                        resolve(results);
                    });
                history.start(); // Start emitting events.
            });
        });
}

class Commit {
    step: string;
    hash: string;
}

export function genGit() {
    prepareDiffs()
        .then(function (result) {
            for (let commit of result) {
                if (commit.step !== undefined) {
                    fs.writeFileSync('features/git/' + commit.step + '.txt', commit.hash);
                }
            }
        });
}