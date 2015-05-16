var express = require('express');
var router = express.Router();
var Controller = require("../controller");

router.get('/', function(req, res, next) {
  Controller.renderList(req, res);
});

router.get('/create', function(req, res, next) {
  Controller.renderCreate(req, res);
});

router.get('/:id', function(req, res, next) {
  Controller.renderGet(req, res);
});

router.get('/:id/update', function(req, res, next) {
  Controller.renderUpdate(req, res);
});

router.get('/:id/remove', function(req, res, next) {
  Controller.renderRemove(req, res);
});

module.exports = router;
