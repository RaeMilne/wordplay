(function ($) {		

	function getFile(filename, callback) {
		$.getJSON(filename, function (data) {
			var results = data.results;

			callback(results);
		});
	}

	console.log("3");


	function getQueryVariable(variable) {
		var query = window.location.search.substring(1);
		var vars = query.split("&");
		for (var i=0;i<vars.length;i++) {
			var pair = vars[i].split("=");
			if(pair[0] == variable){return pair[1];}
		}
		return(false);
	}

	function displayProfile(results) {

		var charID = getQueryVariable("id");
		var numResults = results.characters.length;

		var charNum;
		var htmlString;

		console.log(charID);


		for (var i = 0; i < numResults; i++) {

			if (results.characters[i].char_id === charID) {
				charNum = i;
			} else {
			}
		}

		var profile = 

		"<div class='titles'><h2>" + results.characters[charNum].char_name + "</h2></div>"
		+"<h5>CURRENT LOCATION</h5>"
		+"<p>" + results.characters[charNum].setting_place + " " + results.characters[charNum].setting_time + "</p>"
		+"<p></p>"
		+"<h5>BACKSTORY</h5>"
		+"<p>" + results.characters[charNum].backstory + "</p>"
		+"<p></p>"
		+"<h5>PERSONALITY</h5>"
		+"<p>" + results.characters[charNum].personality + "</p>"
		+"<p></p>"
		+"<h5>INTERESTS</h5>"
		+"<p>" + results.characters[charNum].interests +"</p>";

		htmlString = profile;

		$('#char_profile_box').html(htmlString);

	}

getFile("data/master_file.json", displayProfile);

}(window.jQuery));



/*



{
    "char_id":"C000001",
    "char_name":"Elizabeth Bennet",
    "role":"The Lead",
    "backstory":"Eizabeth lives on a country estate in England. She is the second of five daughters. Elizabeth does not have any formal schooling but learned on her own through reading and informal instruction from her father.",
    "personality":"Elizabeth is clever, high-spirited, and strong-willed. She often speaks her mind openly.",
    "interests":"Elizabeth takes pleasure in many things, icluding reading. She can play the piano but not very well.",
    "theme":"Public Domain",
    "setting_place":"England",
    "setting_time":"during the Regency era",
    "source":"Pride and Prejudice",
    "author":"Jane Austen",
    "appearances":""
    ]

(function ($) {


	var htmlString;

	var harold = 

		"<h5>CURRENT LOCATION</h5>"
		+"<p>Metropolis, a bustling modern city in the near future.</p>"
		+"<p></p>"
		+"<h5>BACKSTORY</h5>"
		+"<p>Harold is a bank teller at the community bank where he’s worked for 20 years, "
		+"ever since leaving high school. He has a wife and 2 boys. The oldest, John, is in the marines "
		+"and has just left for basic training. The younger one, Tim, has been in trouble for skipping school. "
		+"Tim is always sullen and combative. Harold and his wife Angie are going through a rough patch. "
		+"They barely speak anymore except to fight.</p>"
		+"<p></p>"
		+"<h5>PERSONALITY</h5>"
		+"<p>A bit meek and unconfrontational. Bullied by his boss at the bank. "
		+"Harold tends to shut down when his wife gets angry with him and just goes silent. "
		+"People in town know him as a good man though they mostly just don’t think of him at all.</p>"
		+"<p></p>"
		+"<h5>INTERESTS</h5>"
			+"<p>Harold enjoys watching golf on TV, modelling trains," 
		+" appreciates a good steak. Used to take his boys to the local minor league baseball games "
		+"but hasn’t been in years. They don’t much like to hang out with him anymore.</p>";

	htmlString = harold;

	$('#char_profile_box').html(htmlString);

})(window.jQuery);

*/