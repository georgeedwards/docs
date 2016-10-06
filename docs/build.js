"use strict";
var YAML = require('yamljs');
var fs = require('fs-extra');
var path = require('path');
// First Copy the latest docs into the source directory
fs.emptyDirSync('source/');
fs.removeSync('pre-source/docs-production/.vscode/');
fs.copySync('pre-source/docs-production', 'source');
var _versions = YAML.parse(fs.readFileSync('./_config.yml', "utf8")).versions;
var versions = _versions.filter(function (e) { return e !== 'latest'; });
for (var _i = 0, versions_1 = versions; _i < versions_1.length; _i++) {
    var version = versions_1[_i];
    console.log("Preparing Version: " + version);
    fs.copySync('pre-source/docs-' + version, 'source/' + version);
}
// Escape code blocks in the markdown
enumerate_child_files_recursive('source/', function (err, results) {
    if (err)
        throw err;
    var _loop_1 = function(result) {
        is_md = new RegExp(".md");
        if (is_md.test(result)) {
            fs.readFile(result, 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }
                var backtick_positions = find(data, "```"); //find positions of backticks
                for (var i = 0, backtick_positions_1 = backtick_positions; i < backtick_positions_1.length; i++) {
                    var backtick_position = backtick_positions_1[i];
                    if (isEven(i)) {
                        var tag = '{% raw %}';
                    }
                    else {
                        var tag = '{% endraw %}';
                        backtick_position += 3; //after backticks
                    }
                    data = data.splice(backtick_position, 0, tag);
                    var newPos = [];
                    for (var _i = 0, backtick_positions_1_1 = backtick_positions_1; _i < backtick_positions_1_1.length; _i++) {
                        var pos = backtick_positions_1_1[_i];
                        pos += tag.length;
                        newPos.push(pos);
                    }
                    backtick_positions_1 = newPos;
                }
                data = data.replace('{{site.baseurl}}', 'http://ns-docs.herokuapp.com');
                data = data.replace('`{{ }}`', '{%raw%}`{{ }}`{%endraw}');
                result = result.replace('start\\introduction', 'index');
                result = result.replace('start/introduction', 'index');
                console.log(result);
                fs.writeFile(result, data, function (err) {
                    if (err)
                        throw err;
                    //console.log('Processed: ' + result);
                });
            });
        }
    };
    var is_md;
    for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
        var result = results_1[_i];
        _loop_1(result);
    }
});
function enumerate_child_files_recursive(dir, done) {
    var results = [];
    fs.readdir(dir, function (err, list) {
        if (err)
            return done(err);
        var pending = list.length;
        if (!pending)
            return done(null, results);
        list.forEach(function (file) {
            file = path.resolve(dir, file);
            fs.stat(file, function (err, stat) {
                if (stat && stat.isDirectory()) {
                    enumerate_child_files_recursive(file, function (err, res) {
                        results = results.concat(res);
                        if (!--pending)
                            done(null, results);
                    });
                }
                else {
                    results.push(file);
                    if (!--pending)
                        done(null, results);
                }
            });
        });
    });
}
;
/**
 * Find all occurences of a string and their index
 */
function find(source, find) {
    var result = [];
    for (var i = 0; i < source.length; ++i) {
        if (source.substring(i, i + find.length) == find) {
            result.push(i);
        }
    }
    return result;
}
String.prototype.splice = function (start, delCount, newSubStr) {
    return this.slice(0, start) + newSubStr + this.slice(start + Math.abs(delCount));
};
function isEven(n) {
    return n % 2 == 0;
}
