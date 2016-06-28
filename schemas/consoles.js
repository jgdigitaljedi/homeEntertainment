var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var consolesSchema = new Schema({
	id: ObjectId,
	deck: String,
	idShort: Number,
	images: [
		{icon_url: String},
		{medium_url: String},
		{screen_url: String},
		{small_url: String},
		{super_url: String},
		{thumb_url: String},
		{tiny_url: String}
	],
	company: String,
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
	controllers: Array,
	accessories: String,
	mods: Array,
	avOutMethod: String,
	year: Number,
	memoryCards: Array,
	burnedGames: Boolean
});

var Consoles = mongoose.model('Consoles', consolesSchema);

module.exports = Consoles;