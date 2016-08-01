"use strict";
var marked = require('marked');
var util = require('hexo-util');

  hexo.extend.tag.register('nativescript', function (args, content) {
    var result = marked(content);
    var front_end = hexo.locals.get('front_end');
    if (front_end == "angular") {
      return null;
    }
    else {
      return result;
    }
  }, { ends: true });

  hexo.extend.tag.register('angular', function (args, content) {
    var result = marked(content);
    if (hexo.locals.get('front_end') == "angular") {
      return result;
    }
    else {
      return null;
    }
  }, { ends: true });


  hexo.extend.tag.register('tabblock', function (args, content) {
    var tabNumber = NumberOfTabs(content);
    var isTabbed = (tabNumber !== 0 || tabNumber !== 1);
    if (isTabbed) {
      var result = '<div class="row"><div class="col s12"><ul class="tabs">';
      for (var i = 0; i < tabNumber; i++) {
        result = result + '<li class="tab col s3"><a href="' + getLanguage(_code) + '">' + codeTag(_code) + '</a></li>';
      }
      result = result + '</ul></div>';
      for (var i = 0; i < tabNumber; i++) {
        result = result + '<div id="' + getLanguage(_code) + '" class="col s12">' + getLanguage(_code) + '</div>';
      }
      result = result + '</div>';
    }
    else {
      var StartofCode = content.substring(content.search('```') + 3);
      var code = StartofCode.substring(0, StartofCode.search('```') + 3);
      var result = codeTag(code);
    } 
    return 'result';
  }, { ends: true });

  function getLanguage(language_dec_onwards) {
    var language_dec_onwardsChars = language_dec_onwards.split('');
    if (language_dec_onwardsChars[0] === '\n') {
      console.log('No Langauge');
      return '';
    }
    else {
      var language_dec;
      for (var i = 0; i < 15; i++ && language_dec === undefined) {
        if (language_dec_onwardsChars[i] === '\n' || language_dec_onwardsChars[i] === '\r') {
          language_dec = language_dec_onwards.substr(0, i);
          return language_dec;
        }
      }
    }
    return language_dec;
  }

  function NumberOfTabs(content) {
    var firstTagPos = (content.search('```') + 3);
    if (firstTagPos === 2) {
      return 0;
    }
    var contentToBeProcessed = content;
    var i = 0;
    do {
      var pastFirstCodeblock = contentToBeProcessed.substring(contentToBeProcessed.substring(firstTagPos).search('```') + 3);
      var isAnotherBlock = (pastFirstCodeblock.search('```') !== -1);
      contentToBeProcessed = pastFirstCodeblock.substring(pastFirstCodeblock.substring(pastFirstCodeblock.search('```') + 3).search('```') + 3);
      i++;
    } while (isAnotherBlock);
    var afterFirstCodeBlock = content.substring(content.search('```') + 3).search('```');
    return i;
  }

  function codeTag(content) {
    var escapeHTML = util.escapeHTML;
    var highlight = util.highlight;
    content = escapeHTML(content);
    content = highlight(content, { autoDetect: true });
    return '<pre><code>' + content + '</code></pre>';
  } 
