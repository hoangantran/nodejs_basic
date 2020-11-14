var express = require('express');
var db = require('../db');
var shortid = require('shortid');

module.exports.index = function(req, res){
	res.render('login/index'); 
}

module.exports.signin = function(req, res){
	var acc = req.body.username;
	var pass = req.body.pass;

	var login = db.get('account').value().filter(function(user) {
		return user.username == acc && user.password == pass;
	});

	if(login != '') {
		res.render('login/access',{
			user : login
		});
	}
	else{
		res.render('login/index',{
			err: "Error by Username or Password"
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