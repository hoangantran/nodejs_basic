var express = require('express');
var db = require('../db');
var Session = require('../models/sessions.model');

module.exports.addCart = async function(req, res){
	var sessionId = req.signedCookies.sessionId;
	var proId = req.params.id;

	Session.update(
			{ sesId : sessionId },
			{
				$push: {
					products : { proId : proId, qty : 1}
				}
			}
		);

	res.redirect('/products');
}