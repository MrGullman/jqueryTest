$(document).ready(function(){

    var myElement = document.getElementsByClassName("view");
    console.log(myElement);
    // create a simple instance
    // by default, it only adds horizontal recognizers
    var mc = new Hammer(myElement);

    // listen to events...
    mc.on("swiperight", function() {

    });

});
