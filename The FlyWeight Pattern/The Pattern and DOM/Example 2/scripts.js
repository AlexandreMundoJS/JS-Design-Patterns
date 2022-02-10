$("div").on("click", function(){
    console.log("You clicked: " + $(this).attr("id"));
});

// we should avoid using the DOM element to create a 
// jQuery object (with the overhead that comes with it)
// and just use the DOM element itself like this:

$("div").on("click", function(){
    console.log("You clicked: " + this.id);
})