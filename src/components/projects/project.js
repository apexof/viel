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
    touch: false,
    afterLoad() {
        $(window).scrollTop($(window).scrollTop() + 1);
    }
});
if (document.documentElement.clientWidth < 601) {
    $(".modal__bgc-img").each(function () {
        let newSrc = $(this).attr("data-src");
        newSrc = newSrc.replace("project", "proj");
        newSrc = newSrc.replace("proj8", "proj7");
        newSrc = newSrc.replace("proj10", "proj9");
        $(this).attr("data-src", newSrc);
    });
}
