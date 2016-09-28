import * as express from "express";
import { join, resolve } from "path";
import * as favicon from "serve-favicon";
import { json, urlencoded } from "body-parser";
import * as logger from 'morgan';
import * as jwt from 'express-jwt';
import * as plugin from './routes/plugins'; 
import * as mongoose from 'mongoose';
import expressValidator = require('express-validator');
/*import { loginRouter } from "./routes/login";
import { protectedRouter } from "./routes/protected";*/

const app: express.Application = express();
app.disable("x-powered-by");
app.use(logger('dev'))
app.use(favicon(join(__dirname, "../public", "favicon.ico")));
app.use(express.static(join(__dirname, '../public')));

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(expressValidator([]));

//app.use(express.static('docs/public'));

app.use('/docs', express.static('docs/public'));


var jwtCheck = jwt({
  secret: new Buffer('g.edwards@gas-sense.co.uk', 'base64'),
  audience: 'gZ27aPXK1cCU0j4bauKiTZM5QFC8y9HO'
});

//app.use('/api/plugins', jwtCheck);
app.use('/api/plugins', plugin);

app.use('/client', express.static(join(__dirname, '../client')));

app.use('/tutorial/*', (req, res) => {
  res.sendFile(resolve(__dirname, '../public/index.html'));
});
app.use('/plugins/', (req, res) => {
  res.sendFile(resolve(__dirname, '../public/index.html'));
});

// Use native Node promises
mongoose.Promise = global.Promise;
// connect to MongoDB
var pw   = process.env.MONGOPW;
var usr   = process.env.MONGOUSR;
mongoose.connect('mongodb://' + usr +':' + pw +'@ds044699.mlab.com:44699/ns-docs')
  .then(() =>  console.log('MongoDB Connection Succesful'))
  .catch((err) => console.error(err));

// error handlers
// development error handler
// will print stacktrace
if (app.get("env") === "development") {

    app.use(express.static(join(__dirname, '../node_modules')));
    app.use(express.static(join(__dirname, '../tools')));

    app.use(function(err, req: express.Request, res: express.Response, next: express.NextFunction) {
        res.status(err.status || 500);
        res.json({
            error: err,
            message: err.message
        });
    });
}

// catch 404 and forward to error handler
app.use(function(req: express.Request, res: express.Response, next) {
    let err = new Error("Not Found");
    next(err);
});

// production error handler
// no stacktrace leaked to user
app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(err.status || 500);
    res.json({
        error: {},
        message: err.message
    });
});

export { app }
