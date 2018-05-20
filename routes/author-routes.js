let path = require("path");
let db = require("../models");
var mongoose = require("mongoose");

module.exports = function(app) {
    
    // Route for getting all Articles from the db
    app.get("/articles", function(req, res) {
        // Grab every document in the Articles collection
        db.Article.find({})
        .then(function(dbArticle) {
            // If we were able to successfully find Articles, send them back to the client
            // res.json(dbArticle);
            console.log(dbArticle);
            res.render("index", dbArticle);
        })
        .catch(function(err) {
            // If an error occurred, send it to the client
            res.json(err);
        });
    });
}