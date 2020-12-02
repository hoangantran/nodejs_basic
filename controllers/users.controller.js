var shortid = require('shortid');
var multer  = require('multer');
var upload = multer({ dest: './public/uploads/' });

var User = require('../models/users.model');

module.exports.index = async function(req, res){
	var users = await User.find();
	res.render('users/user', {
		users: users
	}); 
}

module.exports.search = function(req, res) {
	var value = req.query.q;
	var matchUser = db.get('users').value().filter(function(user) {
		return user.name.indexOf(value) !== -1;
	});

	res.render('users/user', {
		users: matchUser,
		value : value
	}); 
}

module.exports.getCreate = function(req, res){
	res.render('users/create');
	console.log(req.cookies);
}

module.exports.postCreate = function (req, res) {
	req.body.id = shortid.generate();
	req.body.avatar = req.file.path.substr(7);
	db.get('users').push(req.body).write();
	res.redirect('/users');
}

module.exports.find = function(req, res){
	var id = req.params.id;
	var info = db.get('users').find({ id : id }).value();
	res.render('users/view', {
		user : info
	});
}

module.exports.remove = function(req, res,){
	var id = req.params.id;
	db.get('users').remove({id : id}).write();
	res.redirect('/users');
}
