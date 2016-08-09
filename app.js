var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var serveStatic = require('serve-static')
var file = require('./prepareTutorial');
var routes = require('./routes/index');
//var subdomain = require('express-subdomain');

var app = express();

// html view engine setup
app.set('views', path.join(__dirname, '/views'));
app.engine('html', require('jade').renderFile);
app.set('view engine', 'html');

app.use(express.static('views'));
app.use(express.static('public'));

app.use('/node_modules', express.static(__dirname + '/node_modules'));

file.processTutorial(); //generate html rendered patches for tutorial steps

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//all static assetes for hexo content

app.use('/docs', serveStatic('docs/public', {'index': ['index.html', 'index.htm']}))
//app.use(subdomain('docs', express.static('docs/public')));
app.use('/script', serveStatic('docs/public/script'))
app.use('/style', serveStatic('docs/public/style'))
app.use('/images', serveStatic('docs/public/images'))
app.use('/diff', serveStatic('tutorial/diffs'))


app.use('/', routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
