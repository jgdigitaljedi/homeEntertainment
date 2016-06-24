var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var gamesSchema = new Schema({
	id: ObjectId,
	mySystem: String,
	deck: String,
	genres: Array,
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
	name: String,
	original_game_rating: String,
	original_release_date: String,
	platforms: Array,
	publishers: Array,
	similar_games: Array,
	dateAdded: String,
	obHd: Boolean,
	gbId: String,
	year: Number,
	case: Boolean,
	burned: Boolean
});

var Games = mongoose.model('Games', gamesSchema);

module.exports = Games;