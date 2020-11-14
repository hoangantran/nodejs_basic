var db = require('../db');
var shortid = require('shortid');

module.exports.index = function(req, res){
	res.render('users/user', {
		users: db.get('users').value()
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
}

module.exports.postCreate = function (req, res) {
	req.body.id = shortid.generate();
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