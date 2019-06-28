$(".fancy-img").fancybox();

const lazyLoadInstance = new LazyLoad({ elements_selector: ".lazy" });
if (lazyLoadInstance) {
    lazyLoadInstance.update();
}

$(window).on("resize orientationchange", () => {
    $(".process__list").slick("resize");
    $(".tech__list").slick("resize");
    $(".projects__list").slick("resize");
    $(".partners__list").slick("resize");
});
