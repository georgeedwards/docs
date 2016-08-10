'use strict';

var util = require('hexo-util');
var highlight = util.highlight;
var stripIndent = require('strip-indent');
var rCaptionUrl = /(\S[\S\s]*)\s+(https?:\/\/)(\S+)/i;
var rCaption = /(\S[\S\s]*)/;
var rTab = /<!--\s*tab (\w*)\s*-->\n([\w\W\s\S]*?)<!--\s*endtab\s*-->/g;

// create a window with a document to use jQuery library
require("jsdom").env("", function (err, window) {
    if (err) {
        console.error(err);
        return;
    }

    var $ = require("jquery")(window);

    /**
     * Multi code block
     * @param args
     * @param content
     * @returns {string}
     */
    function multiCodeBlock(args, content) {

        var arg = args.join(' ');
        // get blog config
        var config = hexo.config.highlight || {};

        if (!config.enable) {
            return '<pre><code>' + content + '</code></pre>';
        }

        var html;
        var matches = [];
        var match;
        var caption = '';
        var codes = '';

        // extract languages and source codes
        while (match = rTab.exec(content)) {
            matches.push(match[1]);
            matches.push(match[2]);
        }
        // create tabs and tabs content
        for (var i = 0; i < matches.length; i += 2) {
            var lang = matches[i];
            var code = matches[i + 1];
            var $code;
            // trim code
            code = stripIndent(code).trim();
            // add tab
            // active the first tab
            if (i == 0) {
                caption += '<li class="tab col s3"><a class="active" href="#' + lang + '">' + lang + '</a></li>';
            }
            else {
                caption += '<li class="tab col s3"><a href="#' + lang + '">' + lang + '</a></li>';
            }
            // highlight code
            code = highlight(code, {
                lang: lang,
                gutter: config.line_number,
                tab: config.tab_replace,
                autoDetect: config.auto_detect
            });
            // used to parse HTML code and ease DOM manipulation
            // display the first code block
            $code = $('<div>').append(code).find('>:first-child');
            /*
            if (i == 0) {
                $code.css('display', 'block');
            }
            else {
                $code.css('display', 'none');
            }*/

            codes += '<div id="' + lang + '" class="col s12">' + $code.prop('innerHTML') + '</div>';
            console.log("CODES: " + codes);
        }
        // build caption
        caption = '<ul class="tabs">' + caption + '</ul>';
        // add caption title
        if (rCaptionUrl.test(arg)) {
            match = arg.match(rCaptionUrl);
            caption = '<a href="' + match[2] + match[3] + '">' + match[1] + '</a>' + caption;
        }
        else if (rCaption.test(arg)) {
            match = arg.match(rCaption);
            caption = '<span>' + match[1] + '</span>' + caption;
        }
        codes = '<div class="tabs-content">' + codes + '</div>';
        // wrap caption
        caption = '<div class="col s12">' + caption + '</div>';
        html = '<div class="row">' + caption + codes + '</div>';
        return html;
    }

    /**
     * Multi code block tag
     *
     * Syntax:
     *   {% m_codeblock %}
     *   <!-- tab [lang] -->
     *       content
     *   <!-- endtab -->
     *   {% endm_codeblock %}
     * E.g:
     *   {% m_codeblock %}
     *   <!-- tab js -->
     *       var test = 'test';
     *   <!-- endtab -->
     *   <!-- tab css -->
     *       .btn {
     *           color: red;
     *       }
     *   <!-- endtab -->
     *   {% endm_codeblock %}
     */
    hexo.extend.tag.register('m_codeblock', multiCodeBlock, { ends: true });
});