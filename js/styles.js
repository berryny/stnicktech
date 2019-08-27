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

    //borrowed from jQuery easing plugin
  	//http://gsgd.co.uk/sandbox/jquery.easing.php
    $.easing.elasout = function(x, t, b, c, d) {
    		var s=1.70158;var p=0;var a=c;
    		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
    		if (a < Math.abs(c)) { a=c; var s=p/4; }
    		else var s = p/(2*Math.PI) * Math.asin (c/a);
    		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
    };
    $('#contact-footer').click(function(){
      $.scrollTo( $('#contactus').val(), {duration:2500} );
    });
  });
})(); // the end!
