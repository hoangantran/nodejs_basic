var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
	name: String,
	price: String,
	image: String
});

var Product = mongoose.model('Product', productSchema, 'products');

module.exports = Product;