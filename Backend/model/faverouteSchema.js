const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FaviroutesSchema = new Schema({
    title : String,
    img  : String,
    description : String 
})

const Faviroutes = mongoose.model("faviroutes", FaviroutesSchema)
module.exports = Faviroutes