// $(document).ready(() => {
$(".fancy-img").fancybox();

$(".lazy").lazy({
    scrollDirection: "vertical",
    effect: "fadeIn",
    visibleOnly: true,
    onError(element) {
        console.log("error loading " + element.data("src"));
    }
});
$(".modal .lazy").lazy({ visibleOnly: false });

$(window).on("resize orientationchange", () => {
    $(".process__list").slick("resize");
    $(".tech__list").slick("resize");
    $(".projects__list").slick("resize");
    $(".partners__list").slick("resize");
});
// });
