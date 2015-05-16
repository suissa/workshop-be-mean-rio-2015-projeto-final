var express = require('express');
var router = express.Router();
var Controller = require("../controller");

// Create
router.post('/', function(req, res, next) {
  Controller.create(req, res);
});
// Retrieve
router.get('/', function(req, res, next) {
  Controller.retrieve(req, res);
});
// get
router.get('/:id', function(req, res, next) {
  Controller.get(req, res);
});
// Update
router.put('/:id', function(req, res, next) {
  Controller.update(req, res);
});
// Delete
router.delete('/:id', function(req, res, next) {
  Controller.delete(req, res);
});

module.exports = router;
