var express = require('express');
var router = express.Router();

var controller = require('../controllers/login.controller');

var middleware = require('../middleware/validate.middleware');

router.get('/', controller.index);

router.post('/signin', controller.signin);

router.get('/signup', controller.getSignup);

router.post('/signup', middleware.postSignup, controller.postSignup);

module.exports = router;


