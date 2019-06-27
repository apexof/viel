$(".tech__list").slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    arrows: true,
    initialSlide: 1,
    centerMode: true,
    slidesToScroll: 1,
    slidesToShow: 2,
    responsive: [
        {
            breakpoint: 1201,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: false
            }
        }
    ]
});
