var express = require('express');
var router = express.Router();

var controller = require('../controller/apiController.controller');

router.get('/products', controller.productsApi);

router.get('/users', controller.usersApi)

module.exports = router;