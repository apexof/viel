$(".partners__list").slick({
    infinite: true,
    speed: 300,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1000,
    variableWidth: true,
    adaptiveHeight: false,
    centerMode: true,
    responsive: [
        {
            breakpoint: 3000,
            settings: "unslick"
        },
        {
            breakpoint: 601,
            settings: { slidesToShow: 3, slidesToScroll: 3 }
        }
    ]
});
