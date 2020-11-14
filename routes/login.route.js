var express = require('express');
var router = express.Router();

var controller = require('../controllers/login.controller');

router.get('/', controller.index);

router.post('/signin', controller.signin);

router.get('/signup', controller.getSignup);

router.post('/signup', controller.postSignup);

module.exports = router;


