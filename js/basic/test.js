$(document).ready(function(){

    $nav =$('.cnav');
    $toggleCollapse =$('.cctoggle-collapse');


// click event on toogle menu
$toggleCollapse.click(function(){
    $nav.toggleClass('cccollapse');
})
var swiper = new Swiper('.swiper-container',{
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect:{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false
    },
     pagination:{
        el: '.swiper-pagination'
     },
     autoplay:{
        delay: 3000
     }
 });
 $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav:true,
    mouseDrag:false,
    autoplay:true,
    animateOut: 'slideOutUp',
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

var touch 	= $('#resp-menu');
var menu 	= $('.menu');

$(touch).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle();
});

$(window).resize(function(){
    var w = $(window).width();
    if(w > 767 && menu.is(':hidden')) {
        menu.removeAttr('style');
    }
});
});

