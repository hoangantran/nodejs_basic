var Session = require('../models/sessions.model');
var shortid = require('shortid');

module.exports.session = function(req, res, next){
	if(!req.signedCookies.sessionId){
		var sessionId = shortid.generate();
		res.cookie('sessionId', sessionId, {
			signed : true
		});
		Session.create({
			sesId : sessionId,
			products : []
		});
	}
	next();
}
