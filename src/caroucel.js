/*import 'owl.carousel/dist/assets/owl.carousel.min.css';*/

import 'owl.carousel';
import '@fortawesome/fontawesome-free';

import $ from "jquery";

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items: 2,
        nav: true,
        navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
        animateOut: 'fadeOut',
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 5000,
        center: true,
        loop: true
    });
});
