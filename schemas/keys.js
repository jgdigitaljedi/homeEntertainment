var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;


var keysSchema = new Schema({
	id: ObjectId,
	key: String,
	value: String
});

var Keys = mongoose.model('Keys', keysSchema);

module.exports = Keys;