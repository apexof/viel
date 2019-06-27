$(".review__thank-list").slick({
    dots: true,
    infinite: false,
    speed: 300,
    arrows: false,
    centerPadding: 0,
    adaptiveHeight: false,
    centerMode: false,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }
    ]
});

$("#show-all-reviews").click(() => {
    $(".review__video-list-el:last-child").toggle("medium");
    $(".review__video-list-el:nth-last-child(2)").toggle("medium");
});
