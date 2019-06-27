if (document.documentElement.clientWidth < 651) {
    $(".process__list-el-img").removeClass("animatedParent");
    $(".process__list-el-content").removeClass("animatedParent");
    $(".process__list-el-img img").removeClass("animated fadeInLeftShort fadeInRightShort");

    $(".process__list-el-title").removeClass("animated fadeInLeftShort fadeInRightShort");
    $(".process__list-el-text").removeClass("animated fadeInLeftShort fadeInRightShort");
    $(".process__list-el-result").removeClass("animated fadeInLeftShort fadeInRightShort");
}

$(".process__arrow>img").mouseenter(() => {
    $(".process__list-el:nth-child(n+2)").css("display", "flex");
    $(".process__arrow").hide();
    $(window).scrollTop($(window).scrollTop() + 1);
});

$(".process__list").slick({
    dots: false,
    infinite: false,
    speed: 300,
    arrows: true,
    adaptiveHeight: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 3000,
            settings: "unslick"
        },
        {
            breakpoint: 651,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
