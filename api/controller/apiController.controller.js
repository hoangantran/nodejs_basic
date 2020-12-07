var Product = require('../../models/products.model');
var User = require('../../models/users.model');

module.exports.productsApi = async function (req, res) {
	var products = await Product.find();
	res.json(products);
};

module.exports.postProductsApi = async function (req, res) {
	var products = await Product.create(req.body);
	res.json(products);
};

module.exports.deleteProductsApi = async function (req, res) {
	var id = req.params.id;
	var products = await Product.deleteOne({ _id : id }).exec();
	res.json();
};

module.exports.putProductsApi = async function (req, res) {
	var id = req.params.id;
	Product.find({ _id : id }, function(err){
		if(err){
			Product.create(req.body);
		}
		else{
			Product.findOne({ _id: id }, function(err, data){
				data.name = req.body.name;
				data.price = req.body.price;
				data.image = req.body.image;
				data.save();
			});
		}
	});
	res.json();
};

module.exports.patchProductsApi = async function (req, res) {
	var id = req.params.id;
	Product.findOne({ _id: id }, function(err, data){
		data.name = req.body.name;
		data.price = req.body.price;
		data.image = req.body.image;
		data.save();
	});
	res.json();
};

module.exports.usersApi = async function (req, res) {
	var products = await User.find();
	res.json(products);
};