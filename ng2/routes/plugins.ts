import * as express from 'express';
export var router = express.Router();
import * as mongoose from 'mongoose';
import * as PluginSchema from '../../features/plugins/models/plugin';

/* GET /todos listing. */
router.get('/', function(req, res, next) {
  PluginSchema.find(function (err, todos) {
    if (err) return next(err);
    res.json(todos);
  });
});