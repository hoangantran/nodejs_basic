var db = require('../db');

module.exports.count = function(req, res, next){
	var sessionId = req.signedCookies.sessionId;
	var products = db.get('sessions').find({id : sessionId}).get('cart').value();
	var count = 0;
	for (var i in products) {
		 count += products[i];
	}
	res.locals.count = count;
	next();
}