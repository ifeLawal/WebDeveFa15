$( document ).ready(function() {

	console.log("document is ready!");

	// jQuery can help you select HTML elements on your page
	var $button = $(".boardButtons");

	// set up button events
	$button.click(function( event ) {
		//alert( "The link will no longer take you to jquery.com" );
		//event.preventDefault();

		// and animate, fade out, fade in, add and remove classes
    $(this).attr("src","BoardButton2.jpg");
	});


	// jQuery makes animations easy


	// jQuery also has built in methods for making AJAX calls


});
