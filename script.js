$(document).on("pagecreate", "#pageone", function(){

    $(".view").on('swiperight', swiperightHandeler);
    $(".view").on('swipeleft', swipeleftHandeler);

    function swiperightHandeler() {
        $(this).animate({left:"150px"}, 400);
        $(".buttons").animate({left:"0px"}, 400);
      //$(this).addClass("swiperight");
    }

    function swipeleftHandeler() {
        $(this).animate({left:"0px"}, 400);
        $(".buttons").animate({left:"-150px"}, 400);
      //$(this).removeClass("swiperight");
    }

    $(document).on('swipeleft', 'li', function(){
      console.log("swipe left");
    });

    $(document).on('swiperight', 'li', function(){
      console.log("swipe right");
    });


});
