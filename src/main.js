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
    $("#show-all-thanks").click(() => {
        if (document.documentElement.clientWidth < 901) {
            $(".review__thank-list a:nth-child(n + 9)").toggle("medium");
        }
    });
});
