var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var gamesSchema = new Schema({
	id: ObjectId,
	mySystem: String,
	deck: String,
	genres: Array,
	idShort: Number,
	images: Array,
	name: String,
	original_game_rating: Array,
	original_release_date: String,
	platforms: Array,
	publishers: Array,
	similar_games: Array,
	dateAdded: Date,
	obHd: Boolean,
	gbId: String
});

var Games = mongoose.model('Games', gamesSchema);

module.exports = Games;