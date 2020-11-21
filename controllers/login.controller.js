var express = require('express');
var db = require('../db');
var shortid = require('shortid');
var md5 = require('md5');

module.exports.index = function(req, res){
	res.render('login/index'); 
}

module.exports.signin = function(req, res){
	var username = req.body.username;
	var password = md5(req.body.password);
	var user = db.get('account').find({username : username}).value();

	if(!user){
		res.render('login/index',{
			err: "Account not Exits",
			values: req.body
		});
		return;
	}

	if(user.password !== password){
		res.render('login/index',{
			err: "Wrong password",
			values: req.body
		});
		return;
	}
	res.cookie('userId', user.id);
	res.redirect('/users');
}

module.exports.getSignup = function(req, res){
	res.render('login/create'); 
}

module.exports.postSignup = function(req, res){
	req.body.id = shortid.generate();
	req.body.password = md5(req.body.password);
	db.get('account').push(req.body).write();
	res.redirect('/login')
}