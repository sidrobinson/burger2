let express = require ("express");
let router = express.Router();
// let index = require("../views/");
// let burger = require 

router.get("/", function(req, res) {
    console.log("it works!")
    // res.render(index)
});

module.exports = router;