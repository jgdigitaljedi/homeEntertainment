var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var consolesSchema = new Schema({
	deck: String,
	id: Number,
	image: {
		icon_url: String,
		tiny_url: String,
		small_url: String,
		medium_url: String,
		large_url: String
	},
	install_base: String,
	name: String,
	original_price: String,
	release_date: String,
	dateAdded: Date,
	hasHd: Boolean,
	listImage: String,
	portNumber: Number,
	gbId: String,
	instructions: Array,
	notes: Array
});

consolesSchema.methods.addConsole = function (which) {

};

consolesSchema.methods.deleteConsole = function (which) {

};

consolesSchema.methods.getConsole = function (which) {

};

consolesSchema.methods.getAllConsoles = function (which) {

};

var Consoles = mongoose.model('Consoles', consolesSchema);

module.exports = Consoles;