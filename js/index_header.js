/**
 * Created by 阿部宽 on 2017/6/21.
 */
$(function () {
    $('.nav_content_aside_cart').mouseenter(function () {
        console.log(1);
        $(".nav_content_aside_cart-wrapper").removeClass("hide");
    });
    $('.nav_content_aside_cart').mouseleave(function () {
        console.log(2);
        $(".nav_content_aside_cart-wrapper").addClass("hide");
    })
});