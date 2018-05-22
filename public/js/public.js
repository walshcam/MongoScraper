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
    console.log("ID: " + id + " Note: " + newNote);
    //Run a POST method to pass the note to the backend

    $.ajax({
        method: "POST",
        url: "/articles/" + id,
        data: {
            body: newNote
        }
    }).then(function(data) {
        console.log(JSON.stringify(data));
    })
    // Empties Input Field
    $(this).siblings("textarea").val("");
})

//See Current Notes
$(".get-note").on("click", function(event){
    let id = $(this).data("id");

    console.log("ID: " + id)
    //Run a POST method to pass the note to the backend

    $.ajax({
        method: "GET",
        url: "/articles/" + id

    }).then(function(data) {
        console.log(JSON.stringify(data));
    })
})