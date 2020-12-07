var express = require('express');
var router = express.Router();

var controller = require('../controller/apiController.controller');

////Products Api
router.get('/products', controller.productsApi);
router.post('/products', controller.postProductsApi);
router.delete('/products/:id', controller.deleteProductsApi);
router.put('/products/:id', controller.putProductsApi);
router.patch('/products/:id', controller.patchProductsApi);

router.get('/users', controller.usersApi)

module.exports = router;