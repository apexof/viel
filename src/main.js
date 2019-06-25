$(document).ready(() => {
    $(".fancy-img").fancybox();

    $(".projects [data-fancybox]").fancybox({
        autoFocus: false,
        touch: false
        // beforeShow() {
        //     console.log("object");
        //     $("html").css({ height: "100%" });
        //     $("body").css({ height: "100%" });
        // },
        // afterClose() {
        //     $("html").css({ height: "auto" });
        //     $("body").css({ height: "auto" });
        // }
    });

    $(".lazy").lazy({
        scrollDirection: "vertical",
        effect: "fadeIn",
        // visibleOnly: true,
        onError(element) {
            console.log("error loading " + element.data("src"));
        }
    });
    $("#show-all-reviews").click(() => {
        $(".review__video-list-el:last-child").toggle("medium");
        $(".review__video-list-el:nth-last-child(2)").toggle("medium");
    });
    $("#show-all-projects").click(() => {
        $(".projects__list-el-container:nth-child(10)").toggle("medium");
    });
    $(".process__arrow>img").mouseenter(() => {
        $(".process__list-el:nth-child(n+2)").css("display", "flex");
        $(".process__arrow").hide();
    });

    $(".review__thank-list").slick({
        dots: true,
        infinite: false,
        speed: 300,
        arrows: false,
        centerPadding: 0,
        lazyLoad: "ondemand",
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
    $(window).on("resize orientationchange", () => {
        $(".process__list").slick("resize");
    });
});
