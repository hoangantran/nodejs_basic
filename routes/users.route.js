var express = require('express');
var multer  = require('multer');
var router = express.Router();

var upload = multer({ dest: './public/uploads/' });

var controller = require('../controllers/users.controller');

var middleware = require('../middleware/validate.middleware');

router.get('/cookie', function(req, res, next){
	res.cookie('user-id', 12345);
	res.send("Hello");
});

router.get('/', controller.index);

router.get('/search', controller.search);

router.get('/create', controller.getCreate);

router.post('/create', upload.single('avatar'), middleware.postCreate, controller.postCreate);

router.get('/:id', controller.find);

router.get('/remove/:id', controller.remove);

module.exports = router;