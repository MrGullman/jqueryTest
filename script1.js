$(document).ready(function() {
    $(function() {
      //Keep track of how many swipes

      //Enable swiping...
      $(".list-wrapper").swipe( {
        //Single swipe handler for left swipes
        swipeRight:function(event, direction, distance, duration, fingerCount) {
          $(this).animate({left:"150px"}, 400);
        },

        swipeLeft:function(event, direction, distance, duration, fingerCount) {
          $(this).animate({left:"0px"}, 400);
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold:0
      });
    });
});
