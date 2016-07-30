///<reference path="../typings/index.d.ts" />

import * as marked from 'marked';
import * as hexo from 'hexo';

hexo.extend.tag.register('nativescript', function (args, content) {
  var result = marked(content);
  var front_end = hexo.locals.get('front_end');
  if (front_end == "angular") {
    return null;
  } else {
    return result;
  }
}, { ends: true });


hexo.extend.tag.register('angular', function (args, content) {
  var result = marked(content);
  if (hexo.locals.get('front_end') == "angular") {
    return result;
  } else {
    return null;
  }
}, { ends: true });

hexo.extend.tag.register('tabblock', function (args, content) {
  var title = content.substring(content.search('```') + 3);

  return result;
}, { ends: true });

export function getLanguage(language_dec_onwards: string) {
    var language_dec_onwardsChars = language_dec_onwards.split(''); //convert string to array
    // Look for if there is content or newline after
    if (language_dec_onwardsChars[0] === '\n') {
        //no language declared
        console.log('No Langauge');
        return '';
    } else {
        var language_dec: string;
        //for each string character
        for (var i = 0; i < 15; i++ && language_dec === undefined) {
            if (language_dec_onwardsChars[i] === '\n' || language_dec_onwardsChars[i] === '\r') { //if it's a new line character
                language_dec = language_dec_onwards.substr(0, i); //set the language as everything before the new line
                return language_dec;
            }
        }
    }
    return language_dec;
}