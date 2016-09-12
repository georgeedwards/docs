"use strict";
const express = require('express');
var router = express.Router();
const plugin = require('../../features/plugins/models/plugin');
var expressValidator = require('express-validator');
/* GET /todos listing. */
router.get('/', function (req, res, next) {
    plugin.find(function (err, todos) {
        if (err)
            return next(err);
        res.json(todos);
    });
});
/* POST /todos */
router.post('/', function (req, res, next) {
    /* Validate POST */
    req.assert('name', 'Name is required').notEmpty();
    req.assert('package', 'A package is required').notEmpty();
    req.assert('author', 'An author is required').notEmpty();
    req.assert('github', 'A valid GitHub repo URL is required').isURL();
    req.assert('android', 'You must confirm whether this package targets android').isBoolean();
    req.assert('ios', 'You must confirm whether this package targets ios').isBoolean();
    var errors = req.validationErrors();
    if (!errors) {
        plugin.create(req.body, function (err, post) {
            if (err)
                return next(err);
            res.json(post);
        });
    }
    else {
        res.json(errors);
    }
});
module.exports = router;
//# sourceMappingURL=plugins.js.map