var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var consolesSchema = new Schema({
	deck: String,
	id: Number,
	image: Mixed,
	install_base: String,
	name: String,
	original_price: String,
	release_date: String,
	dateAdded: Date
});

consolesSchema.methods.addConsole = function (which) {

};

consolesSchema.methods.deleteConsole = function (which) {

};

var Consoles = mongoose.model('Consoles', consolesSchema);

module.exports = Consoles;