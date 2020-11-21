var db = require('../db');

module.exports.auth = function(req, res, next){
	if(!req.cookies.userId){
		res.redirect('/login');
		return;
	}

	var user = db.get('account').find({id : req.cookies.userId}).value();

	if(!user){
		res.redirect('/login');
		return;
	}
	
	next();
}