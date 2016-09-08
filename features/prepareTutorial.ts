import * as fs from 'fs';
var Diff2Html = require('diff2html').Diff2Html;
var Git = require("nodegit");
import * as hljs from 'highlight.js'; // https://highlightjs.org/
//import * as MarkdownIt from 'markdown-it';
var md = require('markdown-it')({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
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

export function processTutorial() {
    processChapters();
    genGit();
}
/**
 * Create an Array of all files in a directory
 * @param {string} path - the path to the directory you want to scan for files
 * @param {Array<string>} files- usually empty array, start file values 
 */
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

/**
 * Create a file from string content
 * @param {string} content - the content of the file to be written
 * @param {string} fileName - the path and name of the file to be written
 */
function writeFile(content: string, fileName: string) {
    //extract the destination
    var _fileName = fileName.substring(29, fileName.length - 6);
    _fileName = _fileName.substr(9, 3);
    _fileName = './features/tutorial/diffs/' + _fileName + '.html';
    fs.writeFileSync(_fileName, content);
}

/**
 * Generate an array of each code step and it's corresponding sha
 */
export function readRepo(): Promise<Array<Commit>> {
    var patt = new RegExp('[0-9].[0-9]');
    var results: Array<Commit> = [];
    // *** Note we're returning the result of the promise chain
    return Git.Repository.open("features/tutorial") // Open the repository directory.
        .then(function (repo) { // Open the master branch.
            return repo.getMasterCommit();
        })
        .then(function (firstCommitOnMaster) { 
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

/**
 * Prepare the git sha for each code step and then write it into features/git directory
 */
export function genGit() {
    readRepo()
        .then(function (result) {
            for (let commit of result) {
                if (commit.step !== undefined) {
                    fs.writeFileSync('features/git/steps/' + commit.step + '.txt', commit.hash);
                }
            }
        });
}
/**
 * Replace the codestep html with links to the github commit
 * @param {string} content - the html of a rendered git diff
 * @param {string} sha - the git sha hash for this code step
 */
export function setLinks(content: string, sha: string) {
    var patt = new RegExp('<span class="d2h-file-name">(.*?)<');
    var res = patt.exec(content);
    var current = res[0] + '/span>';
    var future = '<a class="d2h-file-name" href="' + 'https://github.com/georgeedwards/ns-tutorial/commit/' + sha + '">' + res[1] + '</a>';
    return content.replace(current, future);
}

/**
 * Render and merge all tutorial chapters and nest in ngIfs
 */
export function processChapters() {
    var files = [];
    var _files = getFiles('./features/docs/source/tutorial', files);

    var chapters: string = '';
    for (let path of _files) {
        var data = fs.readFileSync(path, 'utf8');
        var chapter = path.substr(32, 1);
        
        data = md.render(data)
        
        chapters += '<div *ngIf="chapter == ' + chapter + '">' + data + '</div>';
    }

    chapters = fixHTML(chapters);
    chapters += fs.readFileSync('./features/chapterNav.html', 'utf8');
    var path = './ng2/views/app/tutorial/chapter/chapter.html';
    fs.unlinkSync(path);
    fs.writeFileSync(path, chapters);
}

/**
 * Apply minor fixes to the default markdown output
 */
function fixHTML (content: string): string {
    var fixes = [
        ['<p></div></p>', '</div>'],
        ['{', '&#123;'],
        ['}', '&#125;'],
        ['<p><h4>', '<h4>'],
        ['</h4></p>', '</h4>']
    ]
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
function replaceAll(content: string, search: string, replacement: string): string {
    return content.replace(new RegExp(search, 'g'), replacement);
};
