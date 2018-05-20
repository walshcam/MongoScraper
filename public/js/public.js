$("#new-scrape").on("click", newScrape);

function newScrape() {
    $.get("/scrape")
    .then(
        $.get("/")
    )}

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

    //send the add note 
})