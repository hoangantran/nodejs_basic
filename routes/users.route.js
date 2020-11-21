var express = require('express');
var router = express.Router();

var controller = require('../controllers/users.controller');

var middleware = require('../middleware/validate.middleware');

router.get('/cookie', function(req, res, next){
	res.cookie('user-id', 12345);
	res.send("Hello");
});

router.get('/', controller.index);

router.get('/search', controller.search);

router.get('/create', controller.getCreate);

router.post('/create', middleware.postCreate, controller.postCreate);

router.get('/:id', controller.find);

module.exports = router;