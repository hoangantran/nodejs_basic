var express = require('express');
var db = require('../db');
var Session = require('../models/sessions.model');

module.exports.addCart = async function(req, res){
	var sessionId = req.signedCookies.sessionId;
	var proId = req.params.id;
	var data = Session.find({ sesId : sessionId }, { products : 1});
	var flag = true;
	var count = 0;
	for await (var doc of data) {
		for await (var i of doc.products){
			if(i.proId == proId){
				i.qty = i.qty + 1;
				doc.save();
				flag = false;
				break;
			}
		}
		if(flag != false){
			Session.update({ sesId : sessionId },
				{ $push:{ 
							products: { "proId" : proId, "qty" : 1 } 
					} 
				}).exec();
		}
		break;
	}
	for await (var doc of Session.find({ sesId : sessionId }, { products : 1})) {
		for await (var i of doc.products){
			count += i.qty;
		}
		console.log(count);
	}
	res.redirect('/products');
}