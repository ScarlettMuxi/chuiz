/**
 * Created by ABC on 2017/6/19.
 */
window.onload=function(){
    var ts = document.getElementById("ts");
    document.onmousemove = function (e) {
        var e = e || window.event;

        ts.style.left = getPageX(e) + "px";
        ts.style.top = getPageY(e) + "px";
    }


    function getPageX(e) {
        if (e.pageX) {
            return e.pageX;
        } else {
            return e.clientX + myScroll().scrollLeft;
        }
    }

    function getPageY(e) {
        if (e.pageY) {
            return e.pageY;
        } else {
            return e.clientY + myScroll().scrollTop;
        }
    }

    function myScroll() {
        return {
            scrollTop: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
            scrollLeft: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft
        };
    }

}
//    大胶囊
$(function(){
    $(".jiaoLeft").stop(true,false).animate({left:"345"},3000)
    $(".jiaoright").stop(true,false).animate({left:"595"},3000)
    $(".jiaon").mouseenter(function(){
        $(".jiaoLeft").stop(true,false).animate({left:"0"},3000)
        $(".jiaoright").stop(true,false).animate({left:"907"},3000)
    });
    $(".jiaon").mouseleave(function(){
        $(".jiaoLeft").stop(true,false).animate({left:"345"},3000)
        $(".jiaoright").stop(true,false).animate({left:"595"},3000)
    });



    $(".dian span").click(function () {
        var index = $(this).index();
        $(this).css({background:"#8B8B8B"}).siblings().css({background:"#bbbbbb"});
        $(this).parent().siblings().children().eq(index).fadeIn().siblings().fadeOut();
    });
});


//导航下
