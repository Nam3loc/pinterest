//////////////////////////////////////////////
// Import Dependencies
//////////////////////////////////////////////
const mongoose = require("mongoose");

////////////////////////////////////////////////
// Define Model
////////////////////////////////////////////////
// pull schema and model from mongoose
const Schema = require('mongoose').Schema;

// make movie schema
const pinSchema = new mongoose.Schema({
    picture: {type: String, required: true},
    title: {type: String, require: true},
    description: String,
    link: String
},
{
    timestamps: true
})
  
// make movie model
const Pin = mongoose.model('Pin', pinSchema);

///////////////////////////////////////////////////
// Export Model
///////////////////////////////////////////////////
module.exports = Pin;