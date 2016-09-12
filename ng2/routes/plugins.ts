import * as express from 'express';
var router = express.Router();
import * as mongoose from 'mongoose';
import * as plugin from '../../features/plugins/models/plugin';

/* GET /todos listing. */
router.get('/', function(req, res, next) {
  plugin.find(function (err, todos) {
    if (err) return next(err);
    res.json(todos);
  });
});

/* POST /todos */
router.post('/', function(req, res, next) {
  plugin.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;