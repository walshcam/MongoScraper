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
$(".add-note").on("click", function(event){
    let id = $(this).data("id");
    let newNote = $(this).siblings("textarea").val();
    let looking = $(this).parent()
    console.log("ID: " + id + " New Note: " + newNote + " Looking! " + JSON.stringify(looking));
})

