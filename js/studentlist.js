//global variable - we can use the variable anywhere
// in our code

var userInput;
var count = 0;
var editableText=("<input class='true'>");



// selects the form to submit with the event of pressing
// the enter button
// when writing in the #oneInput the elements
// will be listed
// we use preventDefault to stop the default behavior


$("form").on("submit", function(e) {
	e.preventDefault();
	userInput= $("#oneInput").val();

	$("ol").append("<li class='specify'>" + userInput + "</li>" );

	// clears and resets the input box
	$("#oneInput").val("");
	// counting variables
	var count = $("li").length;
	$("h1").text("You have " +count+ " to dos left.");
	// show the image in the form
	$("img").show();
});

// clears the elements on the page
$("#button2").on("click", function() {
	$("ol").empty();
});


// adds class and adjusts it
$("ol").on("click", "li", function() {
	$(this).toggleClass("addingMore");
});


// clear completed elements with #button3
// use .remove();
$("#button3").on("click", function() {
	$(".addingMore").remove();
	var count = $("li").length;
	$("h1").text("You have " +count+ " to dos left.");
	//hides edit and remove
	$("span").hide();
});

// hide image upon pressing the clear completed
$("#button3").on("click", function() {
	$("img").hide();
});



// delegation - because the DOM didnt know that <li></li> exists
// adds or removes class with mouseenter / mouseleave

$("ol").on("mouseenter", "li", function() {
	$(this).addClass("hover");
		// this code for each spans/li to have edit and remove print onto
	// webpage:
	$(this).append("<span class='selectOne'> edit</span>");
	$(this).append("<span class='selectThree'> remove</span>");
});

$("ol").on("mouseleave", "li", function() {
	$(this).removeClass("hover");

		$(".selectOne").remove();
		$(".selectThree").remove();
});

// add line through

$("ol").on("click", "li", function() {

	$(this).toggleClass("line");

});


// click on edit to add input box
$("ol").on("click", "li .selectOne", function() {

	$(".hover").replaceWith(editableText);

});


// to edit input box

$("ol").on("click", "input.true", function() {

	// $(".true").val('farrah');

 // when you press down on the key with enter
	$(".true").keypress(function(e) {
    if(e.which == 13) {
			// create variable to add new value on page
		 var newEdit;
     newEdit= $(".true").val();
		 $(".true").replaceWith("<li>" + newEdit + "</li>");

    }
 });


});


// removes li and edit portion


	$("ol").on("click", ".selectThree", function() {
		$(".hover").addClass("removeOne");
		$(".removeOne").remove();
		// counts the numbers whenever you remove it
		var count = $("li").length;
		$("h1").text("You have " +count+ " to dos left.");
	});
