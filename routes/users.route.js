var express = require('express');
var router = express.Router();

var controller = require('../controllers/users.controller');

router.get('/', controller.index);

router.get('/search', controller.search);

router.get('/create', controller.getCreate);

router.post('/create', controller.postCreate);

router.get('/:id', controller.find);

module.exports = router;