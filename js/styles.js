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

  /*============================================
    COUNTER
  ==============================================*/
  $(document).ready(function( $ ) {
    $('.counter').counterUp({
      delay: 10,
      time: 1000
    });
  });
})(); // the end!
