var express = require('express');
var db = require('../db');
var shortid = require('shortid');

module.exports.index = function(req, res){
	res.render('tranfer/tranfer',{
		csurfToken : req.csrfToken()
	});
}

module.exports.postCreate = function(req, res){
	var data = {
		id : shortid.generate(),
		account : req.body.account,
		money : parseInt(req.body.money),
		userId : req.signedCookies.userId
	}

	db.get('tranfer').push(data).write();

	res.redirect('/tranfer');
}