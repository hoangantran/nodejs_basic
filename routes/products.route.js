var express = require('express');
var router = express.Router();

var controller = require('../controllers/products.controller');

var middleware = require('../middleware/validate.middleware');

router.get('/', controller.index);

module.exports = router;