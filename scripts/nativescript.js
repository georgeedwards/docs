var marked = require('marked');

hexo.extend.tag.register('nativescript', function (args, content) {
  var result = marked('```bash\n ' + content + '```');
  if (hexo.locals.get('front_end') == "angular") {
    return null;
  } else {
    return result;
  }
}, { ends: true });


hexo.extend.tag.register('angular', function (args, content) {
  var result = marked('```bash\n ' + content + '```');
  if (hexo.locals.get('front_end') == "angular") {
    return results;
  } else {
    return null;
  }
}, { ends: true });


hexo.extend.tag.register('snippet', function (args, content) {
  var result = marked('```bash\n ' + content + '```');
  return result;
}, { ends: false });