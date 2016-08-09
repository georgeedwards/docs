"use strict";
var fs = require('fs');
var Diff2Html = require('diff2html').Diff2Html;
function processTutorial() {
    var files = [];
    var _files = getFiles('./tutorial/patches', files);
    var _loop_1 = function(path) {
        fs.readFile(path, 'utf8', function (err, data) {
            if (err) {
                throw err;
            }
            var content = Diff2Html.getPrettyHtml(data, { outputFormat: 'side-by-side' });
            writeFile(content, path);
        });
    };
    for (var _i = 0, _files_1 = _files; _i < _files_1.length; _i++) {
        var path = _files_1[_i];
        _loop_1(path);
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
    var _fileName = './tutorial/diffs/' + fileName.substring(24, fileName.length - 6) + '.html';
    fs.writeFileSync(_fileName, content);
}
//# sourceMappingURL=prepareTutorial.js.map