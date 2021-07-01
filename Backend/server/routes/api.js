const express = require('express')
const router = express.Router()
const path = require("path");
const Faviroutes = require('../../model/faverouteSchema');

// router.get("/", (req, res) => {
//     console.log(path.join(__dirname, "public", "index.html"))
//     //  res.sendFile(path.join(__dirname, "public", "index.html"));
//     res.send(' ok ')
// });

router.get('/images', function (req, res) {
    Faviroutes.find({}, function (err, fav) {
        if (err) {
            res.status = 404
        }
        res.send(fav)
    })

})
router.post('/images', function (req, res) {
    let fav = req.body
    let newFavorites = new Faviroutes(fav)
    newFavorites.save();
    res.statusCode = 201

    res.send('post works ')
})

router.delete('/images', function (req, res) {
    favirouteId = req.body._id
    Faviroutes.findByIdAndDelete(favirouteId, function (err, rese) {
        res.statusCode = 204
        res.send("delete sucssesfuly")
    })
})

module.exports = router