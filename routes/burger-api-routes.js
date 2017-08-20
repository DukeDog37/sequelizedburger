var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // get all burgers
  app.get("/", function(req, res) {
    //var query = {};
    db.burgers.findAll({}).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  //save new burger
  app.post("/", function(req, res) {
    db.burgers.create(req.body).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  // delete burger
  app.delete("/:id", function(req, res) {
    db.burgers.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

};
