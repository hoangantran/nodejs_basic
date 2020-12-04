var express = require('express');
var Tranfer = require('../models/tranfer.model');

module.exports.index = function(req, res){
	res.render('tranfer/tranfer',{
		csurfToken : req.csrfToken()
	});
}

module.exports.postCreate = function(req, res){
	var data = {
		account : req.body.account,
		money : parseInt(req.body.money),
		userId : req.signedCookies.userId
	}
	Tranfer.create(data);
	res.redirect('/tranfer');
}