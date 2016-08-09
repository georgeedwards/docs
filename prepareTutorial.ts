import * as fs from 'fs';
var Diff2Html = require('diff2html').Diff2Html;

export function processTutorial() {
    var files = [];
    var _files = getFiles('./tutorial/patches', files);

    for (let path of _files) {
        fs.readFile(path, 'utf8', function (err, data) {
            if (err) { throw err; }
            var content = Diff2Html.getPrettyHtml(data, {outputFormat: 'side-by-side'});
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
    var _fileName = './tutorial/diffs/' + fileName.substring(24, fileName.length - 6) + '.html';

    fs.writeFileSync(_fileName, content);
}