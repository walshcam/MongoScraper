$("#new-scrape").on("click", newScrape);

function newScrape() {
    $.getJSON("/scrape", function(data) {
        console.log(data);
    })
    .then(
        $.getJSON("/articles")
    )
}