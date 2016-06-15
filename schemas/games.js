var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gamesSchema = new Schema({
	mySystem: String,
	deck: String,
	genres: Array,
	id: Number,
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

gamesSchema.methods.getAllGames = function () {

};

gamesSchema.methods.getGame = function (which) {
	
};

gamesSchema.methods.addGame = function (which) {
	
};

gamesSchema.methods.deleteGame = function (which) {
	
};

var Games = mongoose.model('Games', gamesSchema);

module.exports = Games;