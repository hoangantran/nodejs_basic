var express = require('express');
var router = express.Router();

var controller = require('../controllers/tranfer.controller');

router.get('/', controller.index);

router.post('/create', controller.postCreate);

module.exports = router;