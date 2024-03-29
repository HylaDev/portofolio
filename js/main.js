jQuery(document).ready(function($) {

	'use strict';

        $(window).load(function() { 
            $(".seq-preloader").fadeOut(); 
            $(".sequence").delay(500).fadeOut("slow"); 
        })
      
        
        $(function() {
  
        function showSlide(n) {

            $body.unbind("mousewheel");
          
            currSlide = Math.min(Math.max(0, currSlide + n), $slide.length-1);
            
            var displacment = window.innerWidth*currSlide;
            // translate slides div across to appropriate slide
            $slides.css('transform', 'translateX(-' + displacment + 'px)');
            // delay before rebinding event to prevent retriggering
            setTimeout(bind, 700);
            
            // change active class on link
            $('nav a.active').removeClass('active');
            $($('a')[currSlide]).addClass('active');
            
        }
      
        function bind() {
             $body.bind('false', mouseEvent);
          }
      
        function mouseEvent(e, delta) {
            // On down scroll, show next slide otherwise show prev slide
            showSlide(delta >= 0 ? -1 : 1);
            e.preventDefault();
        }
        
        $('nav a, .main-btn a').click(function(e) {
            // When link clicked, find slide it points to
            var newslide = parseInt($(this).attr('href')[1]);
            // find how far it is from current slide
            var diff = newslide - currSlide - 1;
            showSlide(diff); // show that slide
            e.preventDefault();
        });
      
        $(window).resize(function(){
          // Keep current slide to left of window on resize
          var displacment = window.innerWidth*currSlide;
          $slides.css('transform', 'translateX(-'+displacment+'px)');
        });
        
        // cache
        var $body = $('body');
        var currSlide = 0;
        var $slides = $('.slides');
        var $slide = $('.slide');
      
        // give active class to first link
        $($('nav a')[0]).addClass('active');
        
        // add event listener for mousescroll
        $body.bind('false', mouseEvent);
    })        


        $('#form-submit .date').datepicker({
        });


        $(window).on("scroll", function() {
            if($(window).scrollTop() > 100) {
                $(".header").addClass("active");
            } else {
                //remove the background property so it comes transparent again (defined in your css)
               $(".header").removeClass("active");
            } 
        });
        // Typed Initiate
    if ($('.tete h3').length == 1) {
        var typed_strings = $('.tete .typed-text').text();
        var typed = new Typed('.tete h3', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20, 
            smartBackspace: false,
            loop: true
        });
    }

    // Typed Initiate
    if ($('.left-content span').length == 1) {
        var typed_string = $('.left-content .typed-text').text();
        var typed = new Typed('.left-content span', {
            strings: typed_string.split('?'),
            typeSpeed: 10,
            backSpeed: 500000,
            smartBackspace: false,
            loop: true
        });
    }


});
