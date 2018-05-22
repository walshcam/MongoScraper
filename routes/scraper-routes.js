let db = require("../models");
let axios = require("axios");
let cheerio = require("cheerio");
var mongoose = require("mongoose");

module.exports = function(app) {
    // A GET route for scraping the echoJS website
    app.get("/scrape", function(req, res) {
        // First, we grab the body of the html with request
        axios.get("https://www.thetakeout.com/").then(function(response) {
            // Then, we load that into cheerio and save it to $ for a shorthand selector
            let $ = cheerio.load(response.data);
            console.log("Cheerio!")
            // Now, we grab every h2 within an article tag, and do the following:
            $("div.post-wrapper article").each(function(i, element) {
                // Save an empty result object
                let result = {};

                // Add the text and href of every link, and save them as properties of the result object
                result.heading = $(this)
                    .children("header")
                    .children("h1")
                    .children("a")
                    .text();
                result.link = $(this)
                    .children("header")
                    .children("h1")
                    .children("a")
                    .attr("href");
                result.paragraph = $(this)
                    .children("div.item__content")
                    .children("div.excerpt")
                    .children("p")
                    .text();


                // Create a new Article using the `result` object built from scraping
                // console.log("Results: " + JSON.stringify(result));
                db.Article.create(result)
                .then(function(dbArticle) {
                // View the added result in the console
                    console.log(dbArticle);
                })
                .catch(function(err) {
                    // If an error occurred, send it to the client
                    return res.json(err);
                });
            });

            
            // If we were able to successfully scrape and save an Article, send a message to the client
            res.send("Scrape Complete");
        });
    });
}