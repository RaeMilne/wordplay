(function ($) {

	function getFile(filename, callback) {
		$.getJSON(filename, function (data) {
			var results = data.results;

			callback(results);
		});
	}

	function displayFeatured(results) {

		var numResults = results.stories.length;
		var elements = [];
		var element;
		var htmlString;
		var featuredElement;

		for (var i=0; i < numResults; i++) {

			if (results.stories[i].is_featured == "YES") {
					element = "<h2 class='splasher'>" + "\"" 
					+ results.stories[i].featured_text + "\"" + "</h2><br><br>";
					element += "<p class='box'><b>" + "– " 
					+ results.stories[i].story_title + " by " 
					+ results.stories[i].author + "</b></p>";
					elements.push(element);
			}
		}

		var numElements = elements.length;

		var storyNum = (Math.floor(Math.random()*numElements));


		htmlString = elements[storyNum];

		//add assembled string to the DOM
		$('#featured_content').html(htmlString);
	}

	getFile("data/master_file.json", displayFeatured);

}(window.jQuery));


