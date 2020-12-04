var Product = require('../../models/products.model');
var User = require('../../models/users.model');

module.exports.productsApi = async function (req, res) {
	var products = await Product.find();
	res.json(products);
};

module.exports.usersApi = async function (req, res) {
	var products = await User.find();
	res.json(products);
};