var db = require('../db');

module.exports.auth = function(req, res, next){
	if(!req.signedCookies.userId){
		res.redirect('/login');
		return;
	}

	var user = db.get('account').find({id : req.signedCookies.userId}).value();

	if(!user){
		res.redirect('/login');
		return;
	}
	
	res.locals.user = user;
	
	next();
}