$("#new-scrape").on("click", newScrape);

//update the scrape - AJAX call is needed for location.reload() to work
function newScrape() {
    $.ajax("/scrape", {
        type: "GET"
    }).then(function(){
        location.reload();
    });
}

//Delete an article
$(".delete-article").on("click", function(event){
    let id = $(this).data("id");
    let selected = $(this).parent().parent();

    $.ajax({
        type: "GET",
        url: "/delete/" + id,

        //On Success
        success: function(response) {
            selected.remove();
        }
    })
})

//Add A Note
$(".")