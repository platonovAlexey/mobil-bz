$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    smartSpeed:600,
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
    });
    var passengerSection = $('.passenger-section');
    var commercialSection = $('.commercial-section');

    var passengerBtn = $('#passenger-btn');
    var commercialBtn = $('#commercial-btn');

    var transportLeftArr = $('.transport-left-arr');
    var transportRightArr = $('.transport-right-arr');

    passengerBtn.click(function(event) {
        event.preventDefault();
        passengerSection.show("slow");
        commercialSection.hide("slow");

        transportLeftArr.show("slow");
        transportRightArr.hide("slow");
    });

    commercialBtn.click(function(event) {
        event.preventDefault();
        passengerSection.hide("slow");
        commercialSection.show("slow");

        transportLeftArr.hide("slow");
        transportRightArr.show("slow");
    });

    $('.header-update__item').on('click', '.js-scroll', function(event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

    $('.js-banner-link-one').click(function(e){
        e.preventDefault();
        $('body,html').animate({scrollTop : 2100},2000);

        commercialSection.show("slow");
        transportRightArr.show("slow");
        passengerSection.hide("slow");
        transportLeftArr.hide("slow");
    });
    $('.js-banner-link-two').click(function(e){
        e.preventDefault();
        $('body,html').animate({scrollTop : 1900},2000);
        
        commercialSection.hide("slow");
        transportRightArr.hide("slow");
        passengerSection.show("slow");
        transportLeftArr.show("slow");
    });

});