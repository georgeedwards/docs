"use strict";
var marked = require('marked');
var util = require('hexo-util');

hexo.extend.tag.register('nativescript', function (args, content) {
  var result = '<div class="codeblock n">' + render(content) + '</div>';
  return result;
}, { ends: true });

hexo.extend.tag.register('angular', function (args, content) {
  var result = '<div class="codeblock ng">' + render(content) + '</div>';
  return result;
}, { ends: true });

function render(content) {
  var clean = [];
  var tagged = [];
  if (content.search("{% m_codeblock %}") !== -1) {
    do {
      var nextTag = "{% m_codeblock %}";
      var nextTagEnd = "{% endm_codeblock %}";

      //push the clean and the tagged code to the respective arrays
      clean.push(content.substring(0, content.search(nextTag)));
      tagged.push(content.substring(content.search(nextTag), content.search(nextTagEnd) + nextTagEnd.length));
      content = content.substring(content.search(nextTagEnd) + nextTagEnd.length);
      // do for whole of content
    } while (content.search("{% m_codeblock %}") !== -1);

    clean.push(content); // push everything after last tag

    // merge the results back (processed)
    var result = [];
    for (var i = 0, j = 0; i < clean.length || j < tagged.length;) {
      if (i < clean.length) {
        result.push(marked(clean[i++]));
      }
      if (j < tagged.length) {
        result.push(tagged[j++]);
      }
    }
  } else {
    return marked(content); // if not tags, render and return
  }
  var result = result.join(''); //convert to string
  return result;
}