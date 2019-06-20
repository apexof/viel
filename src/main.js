$(document).ready(() => {
    $(".fancy-img").fancybox();

    $("[data-fancybox]").fancybox({
        autoFocus: false,
        touch: false
    });

    $("a[href*=\"#\"]").smoothscroll({
        duration: 300,
        easing: "swing"
    });

    $(".lazy").lazy({
        scrollDirection: "vertical",
        effect: "fadeIn",
        visibleOnly: true,
        onError(element) {
            console.log("error loading " + element.data("src"));
        }
    });
});
