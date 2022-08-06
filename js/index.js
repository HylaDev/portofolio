(function ($) {
    "use strict";
    


    // Typed Initiate
    if ($('#tete h3').length == 1) {
        var typed_strings = $('#tete .typed-text').text();
        var typed = new Typed('.tete h3', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20, 
            smartBackspace: false,
            loop: true
        });
    }
    
    
    // Skills
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});
    
   
    
    
})(jQuery);

