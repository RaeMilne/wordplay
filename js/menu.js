(function ($) {

	var htmlString;

	var menuButton = 

	"<div class='menu_button'>"
	+ "<img src='./images/menu_button.svg' />"
	+ "</div>"

	+ "<div class='menu'>"
	+ "<ul>"
	+ "<a href='index.html'><li>INTRO</li></a>"
	+"<li><hr></li>"
	+ "<a href='01_main.html'><li>HOME</li></a>"
	+"<li><hr></li>"
	+ "<a href='02a_roleplay.html'><li>Roleplay</li></a>"
	+"<li><hr></li>"
	+ "<a href='03a_story_select.html'><li>Write</li></a>"
	+"<li><hr></li>"
	+ "<a href='04a_magazine.html'><li>Read</li></a>"
	+"<li><hr></li>"
	+ "<a href=''><li>Drafts</li></a>"
	+"<li><hr></li>"
	+ "</ul>"
	+ "</div>";

	htmlString = menuButton;
	$("#slide_menu").html(htmlString);

	//$(".menu").hide();

	var isHidden = new Boolean(true);

	$(".menu_button").on('click', function () {
		if (isHidden) {
		//	$(".menu").show();

		$("#wrapper").animate ({
			marginLeft: "300px"
		})

		isHidden = false;
	} else {

		$("#wrapper").animate ({
			marginLeft: "0px"
		})

		//$(this).css("overflow", "hidden");

		isHidden = true;
	}

})


})(window.jQuery);



/*



		//} else {
		//	$(".menu").hide();
		//	$("#wrapper").animate ({
		//		marginLeft: "0px"
		//	})

		//}

	$(".menu_button").on('click', function () {
		if ($(".menu").is(":hidden")) {
			$(".menu").show();
			$("#wrapper").css('margin-left': '300px')
		} else {
			$(".menu").hide();
		}
		
	})


$(this).hide("slide", { direction: "left" }, 1000);
$(this).show("slide", { direction: "left" }, 1000);

, function() {
			$(this).find('.menu').animate({
				'width': '0'
			},175, function(){
				$(this).hide();
			}
		}
	}

	$(".menu_button").on('click', function(){
		$(this).find(".menu").show().animate({
			'width': '180px'
		}, 175);
		, function () {
			$(this).find('.menu').animate({
				'width': '0'
			},175, function(){
				$(this).hide();
			});
		});



	+ "<div class='menu'>"
	+ "<ul>"
	+ "<a href=''><li>HOME</li></a>"
	+ "<a href=''><li>PROFILE</li></a>"
	+ "<a href=''><li>Settings</li></a>"
	+ "<a href=''><li>Drafts</li></a>"
	+ "<a href=''><li>Roleplay</li></a>"
	+ "<a href=''><li>Write</li></a>"
	+ "<a href=''><li>Read</li></a>"
	+ "<a href=''><li>Remix</li></a>"
	+ "<a href=''><li>Archive</li></a>"
	+ "</ul>"
	+ "</div>";



	

	*/


/*
<div class="menu">
		<ul>
			<a href=""><li>HOME</li></a>
			<a href=""><li>PROFILE</li></a>
			<a href=""><li>Settings</li></a>
			<a href=""><li>Drafts</li></a>
			<a href=""><li>Roleplay</li></a>
			<a href=""><li>Write</li></a>
			<a href=""><li>Read</li></a>
			<a href=""><li>Remix</li></a>
			<a href=""><li>Archive</li></a>
		</ul>
	</div>
	*/


	/*

$(this).find("#wrapper").animate(
			{
				'margin-left': '300px'
			}
				);
	
 $('div').click(function(){
        $(this).toggleClass('move');
    });
    


		$(".menu_button").on('click', function(){
			$(this).next(".menu").show("slide", {direction: "right"}, 1000);
		})

		$(".menu").hide("slide", {direction: "left"}, 1000);







	$(".menu_button").on('click', function(){
			$(this).next(".menu").show("slide", {direction: "right"}, 1000);
		})

		$(".menu").hide("slide", {direction: "left"}, 1000);

		*/
















