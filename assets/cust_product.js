$(function() {
    

    // Slick Slider   
    $('.slides').slick({
        lazyLoad: 'ondemand',
        mobileFirst: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        fade: true,
        speed: 600,
        prevArrow:"<i class='prev-arrow'>",
        nextArrow:"<i class='next-arrow'>",
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slides',
        centerMode: false,
        focusOnSelect: true,
        arrows: false,
        infinite: true,
        vertical: true,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    vertical: false,
                    infinite: true,
                    mobileFirst: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    focusOnSelect: true,
                    arrows: false,
                    autoplay: false,
                    swipeToSlide: true
                }
            }
        ]
    }); 
        
        
})