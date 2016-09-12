"use strict";
const express = require('express');
exports.router = express.Router();
const PluginSchema = require('../../features/plugins/models/plugin');
/* GET /todos listing. */
exports.router.get('/', function (req, res, next) {
    PluginSchema.find(function (err, todos) {
        if (err)
            return next(err);
        res.json(todos);
    });
});
//# sourceMappingURL=plugins.js.map