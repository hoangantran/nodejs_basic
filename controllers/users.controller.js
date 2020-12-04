var multer  = require('multer');
var upload = multer({ dest: './public/uploads/' });

var mongoose = require('mongoose');
var User = require('../models/users.model');

module.exports.index = async function(req, res){
	var users = await User.find();
	res.render('users/user', {
		users: users
	}); 
};

module.exports.search = async function(req, res) {
	var value = req.query.q;
	var user = await User.find({ name : value  }).exec();
	res.render('users/user', {
		users: user,
		value : value
	});
};

module.exports.getCreate = function(req, res){
	res.render('users/create');
	console.log(req.cookies);
};

module.exports.postCreate = function (req, res) {
	req.body.avatar = req.file.path.substr(7);
	User.create(req.body);
	res.redirect('/users');
};

module.exports.remove = function(req, res,){
	var id = req.params.id;
	User.deleteOne({ _id : id }).exec();
	res.redirect('/users');
};
