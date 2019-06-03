'use strict';
//map initalistion
function initMap() {
    var coords, map, marker, content, info, styles;

    styles = [
        { elementType: 'geometry', stylers: [{ color: '#ebe3cd' }] },
        { elementType: 'labels.text.fill', stylers: [{ color: '#523735' }] },
        { elementType: 'labels.text.stroke', stylers: [{ color: '#f5f1e6' }] },
        {
            featureType: 'administrative',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#c9b2a6' }]
        },
        {
            featureType: 'administrative.land_parcel',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#dcd2be' }]
        },
        {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#ae9e90' }]
        },
        {
            featureType: 'landscape.natural',
            elementType: 'geometry',
            stylers: [{ color: '#dfd2ae' }]
        },
        {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{ color: '#dfd2ae' }]
        },
        {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#93817c' }]
        },
        {
            featureType: 'poi.park',
            elementType: 'geometry.fill',
            stylers: [{ color: '#a5b076' }]
        },
        {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#447530' }]
        },
        {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{ color: '#f5f1e6' }]
        },
        {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [{ color: '#fdfcf8' }]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{ color: '#f8c967' }]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#e9bc62' }]
        },
        {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry',
            stylers: [{ color: '#e98d58' }]
        },
        {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#db8555' }]
        },
        {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#806b63' }]
        },
        {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [{ color: '#dfd2ae' }]
        },
        {
            featureType: 'transit.line',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#8f7d77' }]
        },
        {
            featureType: 'transit.line',
            elementType: 'labels.text.stroke',
            stylers: [{ color: '#ebe3cd' }]
        },
        {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [{ color: '#dfd2ae' }]
        },
        {
            featureType: 'water',
            elementType: 'geometry.fill',
            stylers: [{ color: '#b9d3c2' }]
        },
        {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#92998d' }]
        }
    ];

    content = '<h1 class="title">Beetroot Academy</h1>';
    //beetrot academy coords
    coords = {
        lat: 49.588743,
        lng: 34.558268
    };
    var centered = {
        lat: 49.581941,
        lng: 34.550978
    };

    map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 15,
            center: centered,
            styles: styles,
            gestureHandling: 'cooperative',
            disableDefaultUI: true,
            zoomControl: false,
            scaleControl: false,
            scrollwheel: true,
            navigationControl: true,
            mapTypeControl: true

        });

    info = new google.maps.InfoWindow({
        content: content
    });

    marker = new google.maps.Marker({
        position: coords,
        map: map,
        icon: 'images/marker.png',
        //move marker
        draggable: false
    });

    marker.addListener('click', function() {
        info.open(map, marker);
    });
}

// screen scroll fn
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 350) {
        document.getElementById("btn__top").style.display = "block";
        document.getElementById("btn__top").style.opacity = ".5";
    } else {
        document.getElementById("btn__top").style.opacity = "0";
        document.getElementById("btn__top").style.display = "none";
    }

    var actual_width = window.innerWidth;
    if (actual_width < 812) {
        document.getElementById("btn__top").style.display = "none";
    } else {
        document.getElementById("btn__top").style.display = "block";
    }
}

//scroll to the top  fn
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
//button click
document.getElementById("btn__top").onclick = topFunction;

//---------------------------------------------------------------
(function($) {
    $(document).ready(function() {
        // Mobile menu___________________________
        $('.burger-menu').click(function() {
            $(this).toggleClass('burger-menu--active');
            $('body').toggleClass('is-menu-shown');
        });
        //map button
        $('.info__item').click(function() {
            $(this).toggleClass('info__item--active');
        });
        // slick slider--------------------------
        $('.slider__recent').slick({
            infinite: true,
            slidesToShow: 1,
            dots: true,
            arrows: true
        });
        $('.slider__team').slick({
            infinite: true,
            slidesToShow: 3,
            dots: false,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 4000,
            responsive: [{
                breakpoint: 411,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }, {
                breakpoint: 769,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            }]
        });

    });
})(jQuery);