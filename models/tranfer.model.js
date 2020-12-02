var mongoose = require('mongoose');

var tranferSchema = new mongoose.Schema({
	account: String,
	money: Number,
	userId: String 
});

var Tranfer = mongoose.model('Tranfer', tranferSchema, 'tranfers');

module.exports = Tranfer;