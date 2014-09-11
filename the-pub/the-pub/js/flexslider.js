$(document).ready(function(){
/*
caruseli
*/
    $('#carousel').flexslider({
        animation: "slider",
        controlNav: false,
        animationLoop: false,
        slideshow: true,
        itemWidth: 130,
        itemMargin: 10,
        asNavFor: '#slider',
        slideshowSpeed:4000,
        pauseOnHover:true
    });
    $('#slider').flexslider({
        animation: "slider",
        controlNav: false,
        animationLoop: false,
        slideshow: true,
        sync: "#carousel",
        slideshowSpeed:4000,
        pauseOnHover:true,
        start: function(slider){
          $('body').removeClass('loading');
        }
    });
    $('#slider').flexslider({
        animation: "slider",
        controlNav: false,
        animationLoop: true,
        slideshow: true,
        selector: ".carousel-inner > .item",
        slideshowSpeed:4000,
        pauseOnHover:true,
        directionNav:false,
        start: function(slider){
          $('body').removeClass('loading');
        }
    });

    $('#evnts-carousel').flexslider({
        animation: "slider",
        controlNav: false,
        animationLoop: false,
        slideshow: true,
        asNavFor: '#evnts-slider',
        slideshowSpeed:4000,
        pauseOnHover:true,
        itemWidth: 22,
        prevText:'',
        nextText:''
    });
    $('#evnts-slider').flexslider({
        animation: "slider",
        controlNav: false,
        animationLoop: false,
        slideshow: true,
        sync: "#evnts-carousel",
        slideshowSpeed:4000,
        pauseOnHover:true,
        prevText:'',
        nextText:'',
        start: function(slider){
          $('body').removeClass('loading');
        }
    });



});//finish ready

