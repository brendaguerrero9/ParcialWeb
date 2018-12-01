var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ObrasPublicasSchema = Schema({
    materia:String,
    uv:Number,
    Descripcion:Number,
});

module.exports = mongoose.model(ObrasPublicas,ObrasPublicasSchema);