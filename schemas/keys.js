var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var keysSchema = new Schema({
	key: String,
	value: String
});

keysSchema.methods.getter = function (which) {

};

keysSchema.methods.setter = function (which) {

};

var Keys = mongoose.model('Keys', keysSchema);

module.exports = Keys;