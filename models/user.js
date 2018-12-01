var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ObrasPublicasSchema = Schema({
    nombre:String,
    precio:Number,
    año:Number,
});

module.exports = mongoose.model("ObrasPublicas",ObrasPublicasSchema);