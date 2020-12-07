var express = require('express');
var db = require('../db');
var Session = require('../models/sessions.model');

module.exports.addCart = async function(req, res){
	var sessionId = req.signedCookies.sessionId;
	var proId = req.params.id;
	var data = await Session.find({ sesId : sessionId });
	for(i in toObject(data)){
	    for(j in toObject(data[i])){
	        console.log(data[i][j]);
	    }
	}
	Session.update({ sesId : sessionId },
		{ $push:{ 
					products: { "proId" : proId, "qty" : 1 } 
				} 
		}).exec();
	res.redirect('/products');
}