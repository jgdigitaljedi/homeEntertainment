var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var consolesSchema = new Schema({
	id: ObjectId,
	deck: String,
	idShort: Number,
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
	notes: Array,
	controllers: String,
	accessories: String,
	mods: String,
	avOutMethod: String,
	year: Number,
	memoryCards: String
});

var Consoles = mongoose.model('Consoles', consolesSchema);

module.exports = Consoles;