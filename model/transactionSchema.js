const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TransactionSchema = new Schema({
    amount : Number,
    category : String,
    vendor : String 
})

const Transaction = mongoose.model("transaction", TransactionSchema)
module.exports = Transaction