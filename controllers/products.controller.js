var Product = require('../models/products.model');

module.exports.index = async function (req, res) {
	/*var page = req.query.page || 1;
	var perPage = 8;

	var start = (page - 1) * perPage;
	var end = page * perPage;
	db.get('products').value().slice(start, end)
	*/
	var products = await Product.find();
	res.render('products/index', {
		products: products
	});
};