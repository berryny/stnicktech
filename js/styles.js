(function() {
  "use strict";
  $(window).trigger('resize').trigger('scroll');

  document.addEventListener('DOMContentLoaded', function() {
    /* Using the new Date() function
    new is a keyword which is required for Date
    https://www.w3schools.com/js/js_date_methods.asp
    */
    var d = new Date();
    var currentYear = d.getFullYear(); // dynamic data
    /* Add copyright year */
    var classYearElement = document.querySelector('footer .year');
    classYearElement.innerHTML = currentYear;
  });

  // NOTE: Jquery DOM
  $(document).ready(function( $ ) {

    /*============================================
    COUNTER
    ==============================================*/
    $('.counter').counterUp({
      delay: 10,
      time: 1000
    });

    $('#contact-footer').click(function(){
      $.scrollTo( $('#contactus').val(), {duration:2500} );
    });
  });
})(); // the end!
