(function ($) {		

	function getFile(filename, callback) {
		$.getJSON(filename, function (data) {
			var results = data.results;

			callback(results);
		});
	}

	function getQueryVariable(variable) {
		var query = window.location.search.substring(1);
		var vars = query.split("&");
		for (var i=0;i<vars.length;i++) {
			var pair = vars[i].split("=");
			if(pair[0] == variable){return pair[1];}
		}
		return(false);
	}

	function displayStory(results) {

		var storyID = getQueryVariable("id");
		var numResults = results.stories.length;
		var numChars = results.characters.length;

		var storyNum;
		var htmlString;

		var elements = [];

		console.log(storyID);

		var charID;


		for (var i = 0; i < numResults; i++) {

			if (results.stories[i].story_id === storyID) {
				storyNum = i;
			} else {
			}
		}

		for (var i=0; i < numChars; i++) {

				if (results.stories[storyNum].main_char === results.characters[i].char_name) {
					charID = results.characters[i].char_id;
				} else {

				}
		}

			
		var header = "<h1>" + results.stories[storyNum].story_title + "</h1></div>";

		var element = "<p>" + results.stories[storyNum].story_text + "</p>";

			element += "<div class='extra_content'>";
			element += "<hr class='line'>";
			element += "<h5>CHARACTERS</h5>";
			element +=  "<a href='05b_character_profile.html" + "?id=" + charID + "'><p class='box'>" + results.stories[storyNum].main_char + "</p></a>";
			element += "<hr>";
			element += "<h5>TAGS</h5>";
			element += "<h6 class='tag'>#TRANSFORMATION</h6> <h6 class='tag'>#METROPOLIS</h6>";
			element += "<hr>";
			element += "<h5>CONTRIBUTORS</h5>"
			element += "<a href=''><p class='box'>" +results.stories[storyNum].contributors + "</p></a>";
			element += "<br>";

			element+="<hr>";

			element+="<div class='mini_menu'>";

			element += "<div class='image_menu'>";
			element += "<img src='./images/25_grey/icon-remix.svg'/></div>";
			element += "<h6 class='edit style='float:left'><a href='06c_remix_write.html'>REMIX</a></h6>";

			element += "<div class='image_menu'>";
			element += "<img src='./images/25_grey/icon-favorite.svg'/></div>";
			element += "<h6 class='edit' style='float:left'>FAVORITE</h6>";

			element += "<div class='image_menu'>";
			element += "<img src='./images/25_grey/icon-feedback.svg'/></div>";
			element += "<h6 class='edit' style='float:left'>LEAVE FEEDBACK</h6>";
			element += "</div>";	
			element += "<br>";
			element += "</div>";

			elements.push(element);

		
		htmlString = elements[0];

		$('#story_header').html(header);

		$('#story_display').html(htmlString);

	}

getFile("data/master_file.json", displayStory);

}(window.jQuery));
