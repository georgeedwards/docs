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
    // Open the repository directory.
    Git.Repository.open("features/tutorial")
        // Open the master branch.
        .then(function (repo) {
            return repo.getMasterCommit();
        })
        // Display information about commits on master.
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
            })
            // Start emitting events.
            history.start();
            console.log("return");
        });
}

class Commit {
    step: string;
    hash: string;
}