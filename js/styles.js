(function() {
  "use strict";
  $(window).trigger('resize').trigger('scroll');

  /*============================================
    COUNTER
  ==============================================*/
  jQuery(document).ready(function( $ ) {
    $('.counter').counterUp({
      delay: 10,
      time: 1000
    });
  });
})(); // the end!
