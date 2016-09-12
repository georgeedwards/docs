"use strict";
const express = require('express');
var router = express.Router();
const plugin = require('../../features/plugins/models/plugin');
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
    plugin.create(req.body, function (err, post) {
        if (err)
            return next(err);
        res.json(post);
    });
});
module.exports = router;
//# sourceMappingURL=plugins.js.map