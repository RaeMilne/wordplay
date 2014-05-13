		
(function ($) {


	var htmlString;

	var placeholder = 

	"<h2>title</h2>"
	+"<p>edit your short and snappy snippet here.</p>";

	htmlString = placeholder;

	$('#story_edit_box').html(htmlString);

	$('#story_edit_box').on('click', function() {

		var gigi = 

		"<h2>A Night Out</h2>"
		+"<p>I waved wildly at Nina as she sped away, fighting down bittersweet tears as her cab disappeared around the corner.</p>";


		htmlString = gigi;

		$('#story_edit_box').fadeOut(200, function(){
			$('#story_edit_box').html(htmlString);
			$('#story_edit_box').fadeIn(200);
		})
	})

}(window.jQuery));













