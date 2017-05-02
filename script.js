$(document).on("pagecreate",function(){

    // var view = $('.view');
    // var buttons = $('.buttons');
    //
    // buttons.remove();
    // view.remove();
    //
    // var currentView;
    //
    // function slideView(slide) {
    //     if (currentView) {
    //         currentView.animate({left: "-100%"}, 400, function(){
    //             this.remove();
    //         });
    //     }
    //
    //     currentView = newState;
    //     currentView.css({left:"100%"}).animate({left:0}, 400, function(){
    //
    //     });
    // }

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


});
