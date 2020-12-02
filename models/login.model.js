var mongoose = require('mongoose');

var loginSchema = new mongoose.Schema({
	name: String,
	username: String,
	password: String
});

var Account = mongoose.model('Account', loginSchema, 'login');

module.exports = Account;