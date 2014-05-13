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

		for (var i = 0; i < numResults; i++ ) {

			var charSubset = results.characters[i].backstory.substr(0,150);

			//element = "<img src='./images/50_white/" + results[i].P_IMG + "'/>";
			//element += "<img src='./images/50_white/" + results[i].W_IMG + "'/>";;
			
			element = "<div class='char_explore_box'>" + "<h5>" + results.characters[i].role + "</h5>";
			element +=  "<h2><a href='05b_character_profile.html" + "?id=" + results.characters[i].char_id + "'>" + results.characters[i].char_name + "</a></h2>";
			element += "<p>" + charSubset + "... </p><p>" + "</div>";

			elements.push(element);

		}

		var storyNum1 = (Math.floor(Math.random()*numResults));
		var storyNum2 = (Math.floor(Math.random()*numResults));

		if (storyNum2 == storyNum1) {
			var storyNum2 = (Math.floor(Math.random()*numResults));
		}

		var storyNum3 = (Math.floor(Math.random()*numResults));

		if (storyNum3 == storyNum2 || storyNum3 == storyNum1) {
			var storyNum3 = (Math.floor(Math.random()*numResults));
		}

		// join the strings from the array, adding a div around each html string
		// alternate for simple add:
		// htmlString = "<div class='one-third column'>" 
		// + elements.join("</div><div class='one-third column'>") + "</div>";

		htmlString="";

		htmlString += "<div class='one-third column alpha'>" + elements[storyNum1] + "</div>";
		htmlString += "<div class='one-third column'>" + elements[storyNum2] + "</div>";
		htmlString += "<div class='one-third column omega'>" + elements[storyNum3]+ "</div>";

		//add assembled string to the DOM
		$('#char_display').html(htmlString);
	}

	getFile("data/master_file.json", displayCharacter);

}(window.jQuery));


