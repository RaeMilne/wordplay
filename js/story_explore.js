(function ($) {

	function getFile(filename, callback) {
		$.getJSON(filename, function (data) {
			var results = data.results;

			callback(results);
		});
	}

	function displayStory(results) {

		/*var numStories = results.stories.length;*/
		var numStories = results.stories.length;
		var numChars = results.characters.length;
		var elements = [];
		var element;
		var htmlString;
/*
		for (var i=0; i < numResults; i++) {

			results[i].story_text.replace("\n\n", "</p><p>");
		}*/

		for (var i = 0; i < numStories; i++ ) {

			var storyID = results.stories[i].story_id;

			var charID;

			for (var j=0; j < numChars; j++ ) {

				if (results.stories[i].main_char == results.characters[j].char_name) {
					charID = results.characters[j].char_id;
				} else {

				}
			}

			var storySubset = results.stories[i].story_text.substr(0,150);

			element = "<div class='heading'>";
			element += "<h2><a href='04b_story_read.html" + "?id=" + storyID + "'>" + results.stories[i].story_title + "</a></h2>";
			element += "<h6>Written by <a href=''>" + results.stories[i].author + "</a></h6>";
			element += "<br>";
			element += "<p>" + storySubset + " ... </p>";
			//element += "<p><em>" + results.stories[i].story_summary + "</em></p>";
			element += "</div>";

			element += "<div class='extra_content'>";
			element += "<hr class='line'>";
			element += "<h5>CHARACTERS</h5>";
			element +=  "<a href='05b_character_profile.html" + "?id=" + charID + "'><p class='box'>" + results.stories[i].main_char + "</p></a>";
			element += "<hr>";
			element += "<h5>TAGS</h5>";
			element += "<h6 class='tag'>#TRANSFORMATION</h6> <h6 class='tag'>#METROPOLIS</h6>";
			element += "<hr>";
			element += "<h5>CONTRIBUTORS</h5>"
			element += "<a href=''><p class='box'>" +results.stories[i].contributors + "</p></a>";
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
		}


		var storyNum1 = (Math.floor(Math.random()*numStories));
		var storyNum2 = (Math.floor(Math.random()*numStories));
		
		while (storyNum2 == storyNum1) {
			var storyNum2 = (Math.floor(Math.random()*numStories));
		}

		var storyNum3 = (Math.floor(Math.random()*numStories));

		while (storyNum3 == storyNum2 || storyNum3 == storyNum1) {
			var storyNum3 = (Math.floor(Math.random()*numStories));
		}

		htmlString="";

		htmlString+="<div class='story_box'>" + elements[storyNum1] + "</div>";
		htmlString+="<div class='story_box'>" + elements[storyNum2] + "</div>";
		htmlString+="<div class='story_box'>" + elements[storyNum3] + "</div>";
	
		//add assembled string to the DOM
		$('#story_display').html(htmlString);
		$(".extra_content").hide();



		$(".heading").on('click', function(){
			$(this).next(".extra_content").slideToggle();
			//$(".blah").toggle();

			/*

			if ($(".extra_content").is(":hidden")) {
				$(".blah").show();
			} else {
				$(".blah").hide();
			}

			*/

		})
	}

	getFile("data/master_file.json", displayStory);


}(window.jQuery));




/*
if ($(".menu").is(":hidden")) {
			$(".menu").show();
			$("#wrapper").css('margin-left': '300px')
		} else {
			$(".menu").hide();
		}

		*/




