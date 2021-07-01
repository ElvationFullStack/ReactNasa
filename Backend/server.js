const express = require('express')
const path = require('path')
const api = require('./server/routes/api')

var mongoose = require('mongoose')
var app = express()
//process.env.MONGODB_URI
const port = 3005
mongoose.connect(process.env.CLEARDB_DATABASE_URL||"mongodb://localhost/ReactNasa")

// app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})
console.log(path.join(__dirname))
app.use('/', api)
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(process.env.PORT|| port, function () {
    console.log("Server up and running on port", port)
})

