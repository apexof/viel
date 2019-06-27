$(".projects__list").slick({
    infinite: true,
    speed: 300,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 3000,
            settings: "unslick"
        },
        {
            breakpoint: 601,
            settings: { slidesToShow: 1 }
        }
    ]
});

$("#show-all-projects").click(() => {
    $(".projects__list-el-container:nth-child(10)").toggle("medium");
});

$(".projects [data-fancybox]").fancybox({
    autoFocus: false,
    touch: false
});
