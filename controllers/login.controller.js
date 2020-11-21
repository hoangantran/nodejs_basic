var express = require('express');
var db = require('../db');
var shortid = require('shortid');

module.exports.index = function(req, res){
	res.render('login/index'); 
}

module.exports.signin = function(req, res){
	var username = req.body.username;
	var password = req.body.pass;
	var login = db.get('account').value().filter(function(user) {
		return user.username == username && user.password == password;
	});

	if(login != '') {
		res.render('login/access',{
			users : login
		});
	}
	else{
		res.render('login/index',{
			err: "Error by Username or Password!!!",
			values: req.body
		});
	}
}

module.exports.getSignup = function(req, res){
	res.render('login/create'); 
}

module.exports.postSignup = function(req, res){
	req.body.id = shortid.generate();
	db.get('account').push(req.body).write();
	res.redirect('/login')
}