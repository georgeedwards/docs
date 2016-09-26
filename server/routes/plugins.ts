import * as express from 'express';
var router = express.Router();
import * as mongoose from 'mongoose';
import {plugin} from '../models/plugin';
var expressValidator = require('express-validator');


/* GET /todos listing. */
router.get('/', function (req, res, next) {
    plugin.find(function (err, todos) {
        if (err) return next(err);
        res.json(todos);
    });
});

/* POST /todos */
router.post('/', function (req: validator_request, res, next) {
    /* Validate POST */
    req.assert('name', 'Name is required').notEmpty(); 
    req.assert('package', 'A package is required').notEmpty();
    req.assert('author', 'An author is required').notEmpty();
    req.assert('github', 'A valid GitHub repo URL is required').isURL();
    req.assert('android', 'You must confirm whether this package targets android').isBoolean();
    req.assert('ios', 'You must confirm whether this package targets ios').isBoolean();
    var errors = req.validationErrors();
    if (!errors) {   //No errors were found.  Passed Validation!
        plugin.create(req.body, function (err, post) {
            if (err) return next(err);
            res.json(post);
        });
    } else {
        res.json(errors);
    }
});

module.exports = router;

// Fix assert tsc errors
declare interface validator_request extends Express.Request {
    assert(title: string, description: string);
    validationErrors();
    body: JSON;
}