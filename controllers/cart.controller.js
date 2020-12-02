var express = require('express');
var db = require('../db');

module.exports.addCart = function(req, res){
	var sessionId = req.signedCookies.sessionId;
	var productId = req.params.id;
	
	var count = db.get('sessions')
					.find({id : sessionId})
					.get('cart.' + productId);

	db.get('sessions')
		.find({id : sessionId})
		.set('cart.' + productId, count + 1 || 1)
		.write();

	res.redirect('/products');
}