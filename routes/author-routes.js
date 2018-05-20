let path = require("path");
let db = require("../models");
var mongoose = require("mongoose");

module.exports = function(app) {
    
    app.get("/delete/:id", function(req, res) {
        //Remove an article using the objectID
        db.Article.findByIdAndRemove(req.params.id)
        .then(function(dbArticle) {
            res.json(dbArticle);
        })
        .catch(function(err) {
            res.json(err);
        })
    })
}