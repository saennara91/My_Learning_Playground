$(document).ready(function(){

    $(".nav-icon").click(() => {
        $(".full-nav").addClass("open");
    });

    $(".nav-close").click(() => {
        $(".full-nav").removeClass("open");
    });

    $(window).scroll(() => {
        var sc = $(window).scrollTop();
         if(sc > 100){
             $(".nav").addClass("sticky");
         }else{
             $(".nav").removeClass("sticky");
         }

         
    });
    $('.bxslider').bxSlider({
        mode: 'horizontal',
        moveSlides:1,
        slideMargin:40,
        infiniteLoop:true,
        minSlides:1,
        maxSlides:1,
        speed:1200, 
    });
    $("#work").magnificPopup({
        delegate:'a',
        type:'image',
        gallery:{
            enabled:true
        }
    })
});