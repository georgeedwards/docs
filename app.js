var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var serveStatic = require('serve-static')
var file = require('./features/prepareTutorial');
var routes = require('./ng2/routes/index');
var plugin = require('./ng2/routes/plugins');
var expressValidator = require('express-validator');
var mongoose = require('mongoose');
var jwt = require('express-jwt');

var app = express();

// html view engine setup
app.set('views', path.join(__dirname, '/ng2/views'));
app.engine('html', require('jade').renderFile);
app.set('view engine', 'html');

app.use(express.static('ng2/views'));
app.use(express.static('ng2/public'));

app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/persist', express.static(__dirname + '/persist'));

// JS - Add /app
app.use('/app', express.static(__dirname + '/ng2/views/app'));

// I have to comment this line because it failed
file.processTutorial(); //generate html rendered patches for tutorial steps
//file.genGit(); //generate git SHA
//file.processChapters();

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'ng2/public', 'favicon.png')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(expressValidator([]));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//all static assetes for hexo content

app.use('/docs', serveStatic('features/docs/public', { 'index': ['index.html', 'index.htm'] }));
//app.use(subdomain('docs', express.static('docs/public')));
app.use('/script', serveStatic('features/docs/public/script'));
app.use('/style', serveStatic('features/docs/public/style'));
app.use('/images', serveStatic('features/docs/public/images'));
app.use('/diff', serveStatic('features/tutorial/diffs'));
app.use('/git', serveStatic('features/git'));
app.use('/chapter', serveStatic('ng2/views/app/tutorial/chapter/chapters'));
app.use('/img', serveStatic('features/docs/source/img'));

app.use('/config', serveStatic('ng2/config'));

app.use('/', routes);

// JS - /tutorial static
//app.use('/tutorial', express.static('ng2/views/app/tutorial'));
// JS - /tutorial/chapter/* send index file 
app.all(/^\/tutorial$/, (req, res) => {
  res.redirect('/tutorial/');
});
app.use('/tutorial/', (req, res) => {
  res.sendFile(__dirname + '/ng2/views/index.html');
});
app.use('/plugins/', (req, res) => {
  res.sendFile(__dirname + '/ng2/views/index.html');
});

var jwtCheck = jwt({
  secret: new Buffer('g.edwards@gas-sense.co.uk', 'base64'),
  audience: 'gZ27aPXK1cCU0j4bauKiTZM5QFC8y9HO'
});

app.use('/api/plugins', jwtCheck);
app.use('/api/plugins', plugin);


// Use native Node promises
mongoose.Promise = global.Promise;
// connect to MongoDB
var pw   = process.env.MONGOPW;
var usr   = process.env.MONGOUSR;
mongoose.connect('mongodb://' + usr +':' + pw +'@ds044699.mlab.com:44699/ns-docs')
  .then(() =>  console.log('MongoDB Connection Succesful'))
  .catch((err) => console.error(err));


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
