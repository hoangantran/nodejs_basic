var express = require('express');
var db = require('../db');
var shortid = require('shortid');
var md5 = require('md5');

var Account = require('../models/login.model');

module.exports.index = function(req, res){
	res.render('login/index'); 
}

module.exports.signin = async function(req, res){
	var username = req.body.username;
	var password = md5(req.body.password);
	var user = await Account.find({username : username, password : password});
	if(!user){
		res.render('login/index',{
			err: "Wrong Username or Password!!!",
			values: req.body
		});
		return;
	}
	res.cookie('userId', user.id,{
		signed : true
	});
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