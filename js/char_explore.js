(function ($) {

	function getFile(filename, callback) {
		$.getJSON(filename, function (data) {
			var results = data.results;

			callback(results);
		});
	}

	function displayCharacter(results) {

		var numResults = results.characters.length;
		var elements = [];
		var element;
		var htmlString;

		var storyNum = (Math.floor(Math.random()*numResults));

		for (var i = 0; i < numResults; i++ ) {

			var charSubset = results.characters[i].backstory.substr(0,150);

			//element = "<img src='./images/50_white/" + results[i].P_IMG + "'/>";
			//element += "<img src='./images/50_white/" + results[i].W_IMG + "'/>";;
			
			element = "<div class='char_explore_box'>" + "<h5>" + results.characters[i].role + "</h5>";
			element += "<h2>" + results.characters[i].char_name + "</h2>";
			element += "<p>" + charSubset + "... </p><p>" + "</div>";

			elements.push(element);

		}

		console.log(elements);

		// join the strings from the array, adding a div around each html string
		// alternate for simple add:
		// htmlString = "<div class='one-third column'>" 
		// + elements.join("</div><div class='one-third column'>") + "</div>";

		htmlString="";

		var numChars = 3;

		for (var i = 0; i < numChars; i++ ) {

			if (i % 3 === 0 ) {

				htmlString += "<div class='one-third column alpha'>" + elements[i] + "</div>";

			} else if ((i - 2) % 3 === 0) {

				htmlString += "<div class='one-third column omega'>" + elements[i]+ "</div>";

			} else {

				htmlString += "<div class='one-third column'>" + elements[i] + "</div>";
			}

		}

		//add assembled string to the DOM
		$('#char_display').html(htmlString);
	}

	getFile("data/master_file.json", displayCharacter);

}(window.jQuery));


