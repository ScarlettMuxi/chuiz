/**
 * Created by Administrator on 2017/6/17.
 */

//---------------------------导航栏部分----------------------------------

//导航 手机部分 鼠标停留在手机上 显示phone_hide部分
$(function () {
    //鼠标进入
    $(".h_nav_header .content .first li:eq(1)").mouseenter(function () {
        $("body").css("background","#fafafa");
        $(this).parent().css("background","#fafafa");
        $(this).children(".phone_hide").css("background","#fafafa");
        $(this).children(".phone_hide").stop().slideDown(300);
    });
        //鼠标离开
    $(".h_nav_header .content .first li:eq(1)").mouseleave(function () {
        $("body").css("background","#ededed");
        $(this).parent().css("background","#ededed");
        $(".h_nav_header .content .phone_hide").css("background","#ededed");
        $(".h_nav_header .content .phone_hide").slideUp(300);
    });
})
//图片脱标后，设置文字margintop，
$(".h_nav_header .phone_hide ul li a p:eq(0)").css("marginTop",160);
$(".h_nav_header .phone_hide ul li:eq(1) a p:eq(0)").css("marginTop",160);

//两个手机的动画部分
//鼠标进入后，图片向上移动-2px
$(function () {
    $(".h_nav_header .phone_hide ul li a").mouseenter(function(){
        $(this).find("img").stop().animate({top:-2},20,"swing")

    });
    //鼠标离开后，图片top恢复为0
    $(".h_nav_header .phone_hide ul li a").mouseout(function(){
        $(this).find("img").stop().animate({top:0},20,"swing")
    });
})

//设置导航栏固定
$(function () {
    $(window).scroll(function () {
        var scrollTop=$(this).scrollTop();
        var topHeight=$(".header").height();
        if(scrollTop > topHeight){
            $(".h_nav_fixed").slideDown();
            $(".h_nav_fixed").addClass("fixed");
            $('.h_gray_box').css('marginTop',$(".h_nav_fixed").height());
            $(".header").css("display","none");
        }else{
            $(".h_nav_fixed").css("display","none");
            $('.h_nav_fixed').removeClass('fixed');
            $('.h_gray_box').css('marginTop',0);
            $(".header").css("display","block");
        }
    }) ;
})
//固定导航栏 鼠标停在第二个li上显示一个div
$(function () {
    //鼠标进入
    $(".h_nav_header .h_nav_fixed .phone").mouseenter(function () {
        $("body").css("background","#ededed");
        $(this).parent().css("background","#ededed");
        $(".h_nav_header .h_nav_fixed .phone_hide").css("background","#ededed");
        $(this).children(".phone_hide").stop().slideDown(300);
    });
    //鼠标离开
    $(".h_nav_header .h_nav_fixed .phone").mouseleave(function () {
        $(this).parent().css("background","#fafafa");
        $(this).parent().addClass("biankuang");
        $(".h_nav_header .h_nav_fixed .phone_hide").slideUp(300);
    });
})
//图片脱标后，设置文字margintop，
$(".h_nav_header .h_nav_fixed .phone_hide ul li a p:eq(0)").css("marginTop",160);
$(".h_nav_header .h_nav_fixed .phone_hide ul li:eq(1) a p:eq(0)").css("marginTop",160);

//两个手机的动画部分
//鼠标进入后，图片向上移动-2px
$(function () {
    $(".h_nav_header .phone_hide ul li a").mouseenter(function(){
        $(this).find("img").stop().animate({top:-2},20,"swing")

    });
    //鼠标离开后，图片top恢复为0
    $(".h_nav_header .phone_hide ul li a").mouseout(function(){
        $(this).find("img").stop().animate({top:0},20,"swing")
    });
})








//优先购买码 主要内容两个文本框
$(function () {
    $(".h_gray_box .box_inner .small_info>div input").focus(function () {
        $(this).parent().css("borderColor","blue");
    });
    $(".h_gray_box .box_inner .small_info>div input").blur(function () {
        if($(this).val().length==0){
            $(this).parent().css("borderColor","#E66157");
            $(this).siblings("div").css("display","block");
        }
    });
})

//var goumaima=document.getElementsByClassName("goumaima")[0];
//    goumaima.onfocus= function () {
//      this.borderColor="blue";
//    };
//
//    goumaima.onblur= function () {
//        var reg=/^\w$/
//        if(this.firstElementChild.value.length==0||reg.text(this.firstElementChild.value){
//            this.borderColor="#E66157"
//            this.lastElementChild.display="block";
//        }
//    }


//验证码部分
$(function () {
    $(".yanzhengma span").mouseenter(function () {

        $(this).children("i").css("backgroundColor","#000");
        $(this).children("i").css("opacity",0.7);
        //$(this).buyFirst_css("rgba",(0,0,0,.1));
        //$(this).buyFirst_css("z-index",10)
        $(this).children("i").css("display","block");
    });
    $(".yanzhengma span").mouseleave(function () {
        //$(this).buyFirst_css("backgound","#fff");
        //$(this).buyFirst_css("opacity",1);
        $(this).children("i").css("display","none");
    });
});













