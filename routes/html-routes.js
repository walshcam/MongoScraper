let path = require("path");
let db = require("../models");

module.exports = function(app) {

  // Route for getting all Articles from the db
  app.get("/", function(req, res) {
    // Grab every document in the Articles collection
    db.Article.find({})
      .populate("note")
      .then(function(dbArticle) {
        // If we were able to successfully find Articles, send them back to the client
        let handlebarsObject = {
          articles: dbArticle
        };
        // console.log("handlebarsObject: " + JSON.stringify(handlebarsObject));
        res.render("index", handlebarsObject);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });
}