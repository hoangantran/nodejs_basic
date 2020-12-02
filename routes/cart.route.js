var express = require('express');
var router = express.Router();
var controller = require('../controllers/cart.controller');

router.get('/addCart/:id', controller.addCart);

module.exports = router;