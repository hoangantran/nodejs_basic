var db = require('../db');
var Account = require('../models/login.model');

module.exports.auth = async function(req, res, next){
	if(!req.signedCookies.userId){
		res.redirect('/login');
		return;
	}

	var user = await Account.find({id : req.signedCookies.userId});

	if(!user){
		res.redirect('/login');
		return;
	}
	
	res.locals.user = user;
	
	next();
}