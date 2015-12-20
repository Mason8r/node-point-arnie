var mongoose = require('mongoose');
var Schema = mongoose.Schema;
	var WebRequest = new Schema({
		name: String,
		payload: Array,
		server: Array,
		date: Date
	});
	var WebRequest = mongoose.model('WebRequest', WebRequest);
	module.exports=WebRequest;