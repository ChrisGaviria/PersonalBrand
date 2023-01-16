$(document).ready(function() {

    'use strict';
	
    // ========================================================================= //
    // SMOOTH SCROLL js
    // ========================================================================= //
	
	$(document).on("scroll", onScroll);
	$("a").on('click', function (e) {
	//Only do the smooth scrolling If the link has a hash and the link is pointing to this same page.
		if (this.hash !== "" && this.pathname == window.location.pathname) {
		e.preventDefault();

		$('a').each(function () {
				$(this).removeClass('active');
				 if ($(window).width() < 768) {
					 $('.nav-menu').slideUp();
				 }
			});
				
		$(this).addClass('active');

		var target = this.hash;
		var topOffset = 0; //#top should default to 0 so no need to calculate the difference between top and top :)
		if (target != "#top") { //If the target is not "#top", then calculate topOffset 
		var topOffset = $(target).offset().top;
		}

		$('html, body').stop().animate({
		'scrollTop': topOffset
		}, 900, 'swing', function () {
		window.location.hash = target;
		});
		}
	});
    
    function onScroll(event){
        if ($('#home').length) {     
        var scrollPos = $(document).scrollTop();
        $('nav ul li a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('nav ul li a').removeClass("active");
                currLink.addClass("active");
            }
        });
       }              
    }

	// ========================================================================= //
    //  Back to top button
    // ========================================================================= //
	$(window).scroll(function() {
		if ($(this).scrollTop()) {
			$('.back-to-top').fadeIn();
		} else {
			$('.back-to-top').fadeOut();
		}
	});

	$(".back-to-top").click(function() {
		$("html, body").animate({scrollTop: 0}, 1000);
	 });
	 
    // ========================================================================= //
    // RESPONSIVE MENU
    // ========================================================================= //

    // RESPONSIVE MENU
    $('.right-menu nav ul li a').on('click', function () {
        $('body').removeClass('full-open');
    });
    $('.nav-icon').on('click', function () {
        $('body').toggleClass('full-open');
    });

    // ========================================================================= //
    //  Owl Carousel Services js
    // ========================================================================= //

    $('.team-slide').owlCarousel({
        autoplay: true,
        loop: true,
        margin: 30,
        dots: false,
        nav: false,
		smartSpeed :900,
        responsiveClass: true,
        responsive:{
                    0:{
                        items:1
                    },
                    640:{
                        items:2
                    },
                    767:{
                        items:2
                    },
                    992:{
                        items:3
                    },
                    1199:{
                        items:3
                    }
                }
    });
	
    // ========================================================================= //
    //  Owl Carousel testimonials js
    // ========================================================================= //

    $('.testimonials-slider').owlCarousel({
        autoplay: true,
        loop: true,
        margin: 20,
        dots: false,
        nav: true,
		smartSpeed :900,
		navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsiveClass: true,
        responsive:{
                    0:{
                        items:1
                    },
                    640:{
                        items:1
                    },
                    767:{
                        items:1
                    },
                    992:{
                        items:1
                    },
                    1199:{
                        items:1
                    }
                }
    });

    // ========================================================================= //
    //  Owl Carousel Services
    // ========================================================================= //

    $('.client-logo').owlCarousel({
        autoplay: true,
        loop: true,
        margin: 20,
        dots: false,
        nav: false,
           responsiveClass:true,
                responsive:{
                    0:{
                        items:1
                    },
                    640:{
                        items:2
                    },
                    767:{
                        items:3
                    },
                    992:{
                        items:4
                    },
                    1199:{
                        items:5
                    }
                }
	})

    // ========================================================================= //
    //  Owl Carousel Services
    // ========================================================================= //

    $('.instagram-slide').owlCarousel({
        autoplay: true,
        loop: true,
        margin: 3,
        dots: false,
        nav: false,
           responsiveClass:true,
                responsive:{
                    0:{
                        items:3
                    },
                    640:{
                        items:2
                    },
                    767:{
                        items:5
                    },
                    992:{
                        items:4
                    },
                    1199:{
                        items:8
                    }
                }
	})

    // ========================================================================= //
    //  magnificPopup
    // ========================================================================= //

     /*========Magnific Popup Setup========*/
     $('#portfolio .popup-img').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
	
	// ========================================================================= //
    //  counterUp
    // ========================================================================= //

    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });

	// ========================================================================= //
    //  WOW JS
    // ========================================================================= //
	
    new WOW({ mobile: false }).init();


});


/*========Window Load Function========*/
$(window).on("load", function() {
    
    // ========================================================================= //
    //  pre-loader
    // ========================================================================= //
    
    $(".pre-loader").fadeOut(500);
    
    // ========================================================================= //
    //  Porfolio isotope and filter
    // ========================================================================= // 
    
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-grid-item'
    });

    $('#portfolio-flters li').on('click', function() {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({
            filter: $(this).data('filter')
        });
    });

});