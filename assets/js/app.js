$(function() {

        var header= $("#header"),
            introH = $("#intro").innerHeight(),
            scrollOffset = $(window).scrollTop();

/*Fixed Header*/

     checkScroll(scrollOffset);

    $(window).on("scroll load", function() {

        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });


    function checkScroll(scrollOffset) {

        if(  scrollOffset>= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");

        }

    }

/*Smooth Scroll*/

    $("[data-scroll]").on("click", function(event) {
       event.preventDefault();

        var blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("html, block").animate({
            scrollTop: blockOffset
        }, 500);

        });


/*Menu nav-toggle*/
    $("#nav-toggle").on("click", function(event){
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");

    });

/*Collapse*/
    $("[data-collapse]").on("click", function(event){
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

        $this.toggleClass("active");
    });

/*Slider*/
    $("[data-slider]").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });


    });

/*small logo*/
$(function() { var logo = $(".logo"); $(window).scroll(function() {
var scroll = $(window).scrollTop();

    if (scroll >= 500) {
      if(!logo.hasClass("sml-logo")) {
        logo.hide();
        logo.removeClass('lrg-logo').addClass("sml-logo").fadeIn( "slow");
      }
    } else {
      if(!logo.hasClass("lrg-logo")) {
        logo.hide();
        logo.removeClass("sml-logo").addClass('lrg-logo').fadeIn( "slow");
      }
    }

});
});


