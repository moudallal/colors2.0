( function( window ) {
    // Define main variables
	var home = document.getElementById('home');

	var menuButton = document.getElementById('menu'),
		$overlay = $('#overlay'),
		$logoButton = $('.logo');
		$menu = $('#menu-container'),
		menuBool = false;

	// Menu buttons
	var $homeButton = $('#homeButton'),
		$aboutButton = $('#aboutButton'),
		$skillButton = $('#skillButton'),
		$portfolioButton = $('#portfolioButton'),
		$funButton = $('#funButton'),
		$feedbackButton = $('#feedbackButton'),
		$contactButton = $('#contactButton');

	// Sections
	var $aboutSection = $('#about-section'),
		$skillsSection = $('#skills-section'),
		$portfolioSection = $('#portfolio-section'),
		$funSection = $('#fun-section'),
		$feedbackSection = $('#feedback-section'),
		$contactSection = $('#contact-section');


	// Scroll button in the first section
	var $scrollButton = $('#scroll'),
		$scrollIcon = $('#scroll-icon');

	// Function to customize typewriter animated text
	$(function(){
        $(".typed-text").typed({
            strings: ["Hey there", "Name's Mohamad Moudallal", "I'm a Front-End Developer", "UI/UX Designer", "and a Speedcuber"],
            typeSpeed: 70,
            loop: true,
            loopCount: false
        });
    });

    // Scroll to section given in the function's parameter
	var display = function(section){

		var barHeight = document.getElementById('head-bar').offsetHeight;

		$('html, body').animate({scrollTop: section.offset().top - barHeight}, 1000);

	};

    // Add overlay's main class
	$overlay.addClass('hide');

	// Hide menu and overlay function
	var hide = function(){
		if (menuBool === true){
			$menu.animate({
				right: "-300"
			}, 200);

			$overlay.fadeOut(200, function(){
				$overlay.removeClass('show');
				$overlay.addClass('hide');
			});
			menuBool = false;
			$('body').removeClass('stop-scroll');
			$('body').unbind('touchmove');
		}

	}

	// Function executed when the menu has been clicked
	menuButton.onclick = function(){
		if (menuBool === false) {
			$menu.animate({
				right: "0"
			}, 200);

			$overlay.animate({
				opacity: 0.6
			}, 200);

			$overlay.removeClass('hide');
			$overlay.addClass('show');

			menuBool = true;
			$('body').addClass('stop-scroll');
			$('body').bind('touchmove', function(e){e.preventDefault()});
		}
	};

	// Function executed when logo has been clicked
	$logoButton.click(function() {
		display($('.cover'));
	});

	// Function executed when the overlay has been clicked
	$overlay.click(function() {
		hide();
	});

	// Function executed when the down arrow has been clicked
	$scrollButton.click(function() {
		display($aboutSection);
		$scrollIcon.removeClass('animated');
	});

	// Scroll Buttons
	$homeButton.click(function () {
		display($('.cover'));
		hide();
	});
	$aboutButton.click(function () {
		display($aboutSection);
		hide();
	});
	$skillButton.click(function () {
		display($skillsSection);
		hide();
	});
	$portfolioButton.click(function () {
		display($portfolioSection);
		hide();
	});
	$funButton.click(function () {
		display($funSection);
		hide();
	});
	$feedbackButton.click(function () {
		display($feedbackSection);
		hide();
	});
	$contactButton.click(function () {
		display($contactSection);
		hide();
	});

	// Mobile responsivness
	var $window = $(window),
        $avatar = $('.avatar'),
        $imgContainer = $('.img-container');

    $window.resize(function resize() {
        if ($window.width() < 767) {
            return $avatar.addClass('img-fluid'),
            $imgContainer.removeClass('pr-2').addClass('p-0');
        }

        $avatar.removeClass('img-fluid');
        $imgContainer.removeClass('p-0').addClass('pr-2');

    }).trigger('resize');

	// Animation function for the skills section

	$('.skillbar').each(function() {

		$(this).appear(function() {

			$(this).find('.title').animate({
				opacity: 1
			}, 1000);

			$(this).find('.count-bar').animate({
				width:$(this).attr('data-percent')
			},2000);

			var percent = $(this).attr('data-percent');
			$(this).find('.count').html('<span>' + percent + '</span>');

		});

	});

	// Form Validation
	$(function () { $("input,textarea").not("[type=submit]").jqBootstrapValidation(); } );

	// Function for getting the current year
	var getYear = function(){
		var today = new Date(),
			year = today.getFullYear();
		return year;
	}

	// Assign the current year to the html content in the footer
	$(document).find('#year').html('<span>' + getYear() + '</span>');


})( window );
