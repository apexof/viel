"use strict";$(document).ready(function(){$(".fancy-img").fancybox(),$(".projects [data-fancybox]").fancybox({autoFocus:!1,touch:!1}),$(".lazy").lazy({scrollDirection:"vertical",effect:"fadeIn",visibleOnly:!0,onError:function(e){console.log("error loading "+e.data("src"))}}),$(".modal .lazy").lazy({visibleOnly:!1}),$("#show-all-reviews").click(function(){$(".review__video-list-el:last-child").toggle("medium"),$(".review__video-list-el:nth-last-child(2)").toggle("medium")}),$("#show-all-projects").click(function(){$(".projects__list-el-container:nth-child(10)").toggle("medium")}),$(".process__arrow>img").mouseenter(function(){$(".process__list-el:nth-child(n+2)").css("display","flex"),$(".process__arrow").hide()}),$(".partners__list").slick({infinite:!0,speed:300,arrows:!0,autoplay:!0,autoplaySpeed:1e3,variableWidth:!0,adaptiveHeight:!1,centerMode:!0,responsive:[{breakpoint:3e3,settings:"unslick"},{breakpoint:601,settings:{slidesToShow:3,slidesToScroll:3}}]}),$(".projects__list").slick({infinite:!0,speed:300,arrows:!0,autoplay:!0,autoplaySpeed:2e3,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:3e3,settings:"unslick"},{breakpoint:601,settings:{slidesToShow:1}}]}),$(".review__thank-list").slick({dots:!0,infinite:!1,speed:300,arrows:!1,centerPadding:0,adaptiveHeight:!1,centerMode:!1,slidesToShow:5,slidesToScroll:3,responsive:[{breakpoint:900,settings:{slidesToShow:3,slidesToScroll:3}}]}),$(".process__list").slick({dots:!1,infinite:!1,speed:300,arrows:!0,adaptiveHeight:!0,centerMode:!0,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:3e3,settings:"unslick"},{breakpoint:651,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".tech__list").slick({dots:!1,infinite:!0,autoplay:!0,autoplaySpeed:2e3,speed:300,arrows:!0,initialSlide:1,centerMode:!0,slidesToScroll:1,slidesToShow:2,responsive:[{breakpoint:1201,settings:{slidesToShow:2,slidesToScroll:1,centerMode:!1}}]}),$(".scripts__list").slick({dots:!1,infinite:!0,autoplay:!0,autoplaySpeed:2e3,adaptiveHeight:!0,speed:300,arrows:!0,slidesToScroll:1,slidesToShow:1}),$(window).on("resize orientationchange",function(){$(".process__list").slick("resize"),$(".tech__list").slick("resize"),$(".projects__list").slick("resize"),$(".partners__list").slick("resize")})});