var mongoose = require('mongoose');

var sessionSchema = mongoose.Schema({
	sesId : String,
	product : {
		proId : String,
		qty: Number
	}
});

var Session = mongoose.model('Session', sessionSchema, 'sessions');

module.exports = Session;