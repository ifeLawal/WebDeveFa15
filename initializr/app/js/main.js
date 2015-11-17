$( document ).ready(function() {

	console.log("document is ready!");
	var $data;

	var playing = false;
	var key = 'what';
	var snd = '../snd/bass_01.ogg';
	var looping = true;
	// jQuery can help you select HTML elements on your page
	var $button = $(".boardButtons");

	$.get( "../data/samples.json", function( data ) {
 		//console.log(data);
		$data = data;
		initboard();
	});

	function initboard() {
		for (var i = 0; i < $data.length; i++) {
			var sample = $data[i];
				samples.load(sample.key, sample.path, function(key) {
					console.log(sample);
					samples.setLooping(key, sample.looping);
			});
		}

		$button.click(function( event ) {
			//alert( "The link will no longer take you to jquery.com" );
			//event.preventDefault();

			console.log(samples);
			if(playing) {
				samples.stop($data[0].key);
			}
			else {
				samples.start($data[0].key);
			}
			playing = !playing;

			// and animate, fade out, fade in, add and remove classes
				$(this).attr("src","img/BoardButton2.jpg");
				//snd/musicradar-minimal-house-samples
		});
	}


	// set up button events



	// jQuery makes animations easy


	// jQuery also has built in methods for making AJAX calls


});
