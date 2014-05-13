(function ($) {

	function getFile(filename, callback) {
		$.getJSON(filename, function (data) {
			var results = data.results;

			callback(results);
		});
	}

	function displayRole(results) {

		var numResults = results.roles.length;
		var elements = [];
		var element;
		var htmlString;

		var storyNum = (Math.floor(Math.random()*numResults));

		for (var i = 0; i < numResults; i++ ) {

			element = "<div class='role_box'>" + "<div class='image_role'> <img src='./images/85_black/" + results.roles[i].role_img + "'/> </div>";
			element += "<h6>" + results.roles[i].role.toUpperCase() + "</h6>";
			element += "<p class='box'>" + results.roles[i].descrip + "</p><p>" + "</div>";

			elements.push(element);

		}

		// join the strings from the array, adding a div around each html string
		// alternate for simple add:
		// htmlString = "<div class='one-third column'>" 
		// + elements.join("</div><div class='one-third column'>") + "</div>";

		htmlString="";

		for (var i = 0; i < elements.length; i++ ) {

			if (i % 3 === 0 ) {

				htmlString +=  "<div class='one-third column alpha'>" + "<a href='02b_role_confirm.html'>" + elements[i] + "</a>" + "</div>";

			} else if ((i - 2) % 3 === 0) {

				htmlString += "<div class='one-third column omega'>" + "<a href='02b_role_confirm.html'>" + elements[i] + "</a>" + "</div>";

			} else {

				htmlString += "<div class='one-third column'>" + "<a href='02b_role_confirm.html'>" + elements[i] + "</a>" + "</div>";
			}

		}

		//add assembled string to the DOM
		$('#role_display').html(htmlString);
	}



	getFile("data/master_file.json", displayRole);

}(window.jQuery));


