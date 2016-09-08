"use strict";
const fs = require('fs');
var Diff2Html = require('diff2html').Diff2Html;
var Git = require("nodegit");
const hljs = require('highlight.js'); // https://highlightjs.org/
//import * as MarkdownIt from 'markdown-it';
var md = require('markdown-it')({
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(lang, str).value;
            }
            catch (__) { }
        }
        return ''; // use external default escaping
    },
    html: true
});
/**
 * Generate html for code step snippets
 */
/*export function processTutorial() {
    var files = [];
    var _files = getFiles('./features/tutorial/patches', files);

    for (let path of _files) {
        fs.readFile(path, 'utf8', function (err, data) {
            if (err) { throw err; }
            var content = Diff2Html.getPrettyHtml(data, { outputFormat: 'side-by-side' });
            var patt = /From (.*?)\s/g;
            var sha = patt.exec(data);
            var processedContent = setLinks(content, sha[1]);
            writeFile(processedContent, path);
        });
    }
}*/
function processTutorial() {
    processChapters();
    genGit();
}
exports.processTutorial = processTutorial;
/**
 * Create an Array of all files in a directory
 * @param {string} path - the path to the directory you want to scan for files
 * @param {Array<string>} files- usually empty array, start file values
 */
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
/**
 * Create a file from string content
 * @param {string} content - the content of the file to be written
 * @param {string} fileName - the path and name of the file to be written
 */
function writeFile(content, fileName) {
    //extract the destination
    var _fileName = fileName.substring(29, fileName.length - 6);
    _fileName = _fileName.substr(9, 3);
    _fileName = './features/tutorial/diffs/' + _fileName + '.html';
    fs.writeFileSync(_fileName, content);
}
/**
 * Generate an array of each code step and it's corresponding sha
 */
function readRepo() {
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
exports.readRepo = readRepo;
class Commit {
}
/**
 * Prepare the git sha for each code step and then write it into features/git directory
 */
function genGit() {
    readRepo()
        .then(function (result) {
        for (let commit of result) {
            if (commit.step !== undefined) {
                fs.writeFileSync('features/git/steps/' + commit.step + '.txt', commit.hash);
            }
            console.log(result);
        }
    });
}
exports.genGit = genGit;
/**
 * Replace the codestep html with links to the github commit
 * @param {string} content - the html of a rendered git diff
 * @param {string} sha - the git sha hash for this code step
 */
function setLinks(content, sha) {
    var patt = new RegExp('<span class="d2h-file-name">(.*?)<');
    var res = patt.exec(content);
    var current = res[0] + '/span>';
    var future = '<a class="d2h-file-name" href="' + 'https://github.com/georgeedwards/ns-tutorial/commit/' + sha + '">' + res[1] + '</a>';
    return content.replace(current, future);
}
exports.setLinks = setLinks;
/**
 * Render and merge all tutorial chapters and nest in ngIfs
 */
function processChapters() {
    var files = [];
    var _files = getFiles('./features/docs/source/tutorial', files);
    var chapters = '';
    for (let path of _files) {
        var data = fs.readFileSync(path, 'utf8');
        var chapter = path.substr(32, 1);
        data = md.render(data);
        chapters += '<div *ngIf="chapter == ' + chapter + '">' + data + '</div>';
    }
    chapters = fixHTML(chapters);
    var path = './ng2/views/app/tutorial/chapter/chapter.html';
    fs.unlinkSync(path);
    fs.writeFileSync(path, chapters);
}
exports.processChapters = processChapters;
/**
 * Apply minor fixes to the default markdown output
 */
function fixHTML(content) {
    var fixes = [
        ['<p></div></p>', '</div>'],
        ['{', '&#123;'],
        ['}', '&#125;'],
        ['<p><h4>', '<h4>'],
        ['</h4></p>', '</h4>']
    ];
    for (let fix of fixes) {
        content = replaceAll(content, fix[0], fix[1]);
    }
    return content;
}
/**
 * Replace all Occurences of a string in a parent string
 * @param {string} content - parent string
 * @param {string} search - search term to be replaced
 * @param {string} replacement - content to be put in place of the search term
 */
function replaceAll(content, search, replacement) {
    return content.replace(new RegExp(search, 'g'), replacement);
}
;
//# sourceMappingURL=prepareTutorial.js.map