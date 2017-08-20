var express = require("express");
var moment = require("moment");
var router = express.Router();

var db = require("../models");
// Import burger.js model
var burgers = require("../models/burger.js");

// Create get, post, put and delete routes
router.get("/", function(req, res) {
  burgers.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    //console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
    burgers.create([
    "burger_name", "devoured", "date"
  ], [
    req.body.burger, 0, moment().format("YYYY-MM-DD HH:mm:ss")
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  burgers.update({
    devoured: 1
  }, condition, function() {
    res.redirect("/");
  });
});

router.delete('/:id', function(req, res){
  var condition = 'id = ' + req.params.id;
    burgers.delete(condition, function(){
      res.redirect('/');
    });
});


// Export routes for server.js to use.
module.exports = router;
