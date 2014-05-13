		
(function ($) {

	var htmlString;

	var placeholder = 

	"<h5>THE SIDEKICK</h5>"
	+"<h2 class='edit'>Edit Name</h2>"
	+"<br>"
	+"<p class='edit'><i>Edit summary! Describe your character in one sentence.</i></p>"
	+"<p></p>"
	+"<h5>CURRENT LOCATION</h5>"
	+"<p>Metropolis, a bustling modern city in the near future.</p>"
	+"<p></p>"
	+"<h5>BACKSTORY</h5>"
	+"<p class='edit'>Where is your character from? What was their childhood like? Edit history here.</p>"
	+"<p></p>"
	+"<h5>PERSONALITY</h5>"
	+"<p class='edit'>What is your character like? What are their unique characteristics or qualities? Edit personality here.</p>"
	+"<p></p>"
	+"<h5>INTERESTS</h5>"
	+"<p class='edit'>What does your character like to do? What are their hobbies? Edit interests here.</p>";

	htmlString = placeholder;

	$('#character_edit_box').html(htmlString);

	$('#character_edit_box').on('click', function() {

		var gigi = 

		"<h5>THE SIDEKICK</h5>"
		+"<h2>Gigi</h2>"
		+"<br>"
		+"<p><i>Gigi loves to laugh. Everyone looks to her for advice.</i></p>"
		+"<p></p>"
		+"<h5>CURRENT LOCATION</h5>"
		+"<p>Metropolis, a bustling modern city in the near future.</p>"
		+"<p></p>"
		+"<h5>BACKSTORY</h5>"
		+"<p>Gigi was raised by her mom. She’s an only child which has made her very independent."
		+"When she was little, she met her best friend, Nina. Nina isn’t always kind to Gigi but somehow,"
		+" Gigi can’t stop being there for her.</p>"
		+"<p></p>"
		+"<h5>PERSONALITY</h5>"
		+"<p>Gigi is very funny and sweet. She’s always breaking the ice with a corny joke.</p>"
		+"<p></p>"
		+"<h5>INTERESTS</h5>"
		+"<p>Gigi likes reading books and riding her bicycle.</p>";


		htmlString = gigi;

		$('#character_edit_box').fadeOut(200, function(){
			$('#character_edit_box').html(htmlString);
			$('#character_edit_box').fadeIn(200);
		})
	})

}(window.jQuery));













