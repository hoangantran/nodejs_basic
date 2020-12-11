var db = require('../db');
var Session = require('../models/sessions.model');
module.exports.count = async function(req, res, next){
	var sessionId = req.signedCookies.sessionId;
	var count = 0;
	var ses = await Session.find({ sesId : sessionId }, { products : 1}).exec();
	for (var doc of ses) {
		for (var i of doc.products){
			count = count + i.qty;
		}
	}
	res.locals.count = count;
	next();
}