/**
 * Created by Administrator on 2017/6/17.
 */

$(function(){
//点击颜色按钮换图片
    $(".x_content .w .x_right .x_foot .x_colour li").click(function() {
        //换图片
        $(".x_content .w .x_left .x_img li").eq($(this).index()).show().siblings().hide();
        //高亮显示
        $(this).children("div").css("border","2px solid #999999");
        $(this).siblings().children("div").css("border","1px solid #eaeaea");
        //换全款预定栏的手机颜色
        $(".x_qkyd .w .x_left .info .clor li").eq($(this).index()+1).stop().show().siblings().stop().hide();


    });

//点击内存大小边框高亮显示
    $(".x_content .w .x_middle_right .x_jx li").click(function(){
        //点到其他内存选项缺货信息消失
        $(".x_content .x_right .x_lessinfo").css("display","none");
        //高亮显示
        $(this).css("border","1px solid blue").siblings().css("border","1px solid #e5e5e5");
        //换全款预定栏的内存大小
        $(".x_qkyd .w .x_left .info .size li").eq($(this).index()+1).show().siblings().hide();
        //换全款预定栏的前置2000万像素+晓龙tm626
        $(".x_qkyd .w .x_left .info .pz li").eq($(this).index()+1).show().siblings().hide();
        //换全款预定栏的===左边价格
        $(".x_qkyd .w .x_left .money li").eq($(this).index()+1).show().siblings().hide();
        //换全款预定栏的===右边价格
        $(".x_qkyd .w .x_right .anniu li").eq($(this).index()+1).show().siblings().hide();
    });



//点到32G内存时显示"没货"
    var $lis=$(".x_content .w .x_middle_right .x_jx li");
    var $obj=$($lis[2]);
    $obj.click(function(){
        $(".x_content .x_right .x_lessinfo").css("display","block");
    });

//商品列表
    $(".x_list .w li").click(function(){
        $(this).css("border","1px solid blue").siblings().css("border","1px solid #e5e5e5");
        $(this).children("em").css("background","blue");
        $(this).siblings().children("em").css("background","#e5e5e5");
    });
//    $(".x_list .w li").click(function(){
//        $(this).toggleClass("bk");;
//
//    });



//最后“我知道了”选择
    $(".x_finally .w .x_tishi .choose span").click(function(){
        $("#img").toggleClass("bg");
    });




//第二导航定位
    $(window).scroll(function(){
        if($(this).scrollTop()>$("#fistnav").height()){

            $("#secondnav").css("position","fixed");
            $("#secondnav").css("top","0");
            $("#secondnav .w").css("width",$(this).width()-200);
            $("#secondnav .w").css("padding","0 100px 0 100px");


            $(".x_content").css("marginTop",38);

        }else {
            $(".x_content").css("marginTop","");
            $("#secondnav").css("position","");
            $("#secondnav .w").css("width","");
            $("#secondnav .w").css("padding","");
        }
    })






//全款预定栏的定位
    $("#qkyd").css("width",$(this).width());
    $("#qkyd").css({
        "position":"fixed",
        "bottom":0
    });
    $(window).scroll(function(){
        $("#qkyd").css("width",$(this).width());
        $("#qkyd").css({
            "position":"fixed",
            "bottom":0
        });
    });










//可删除

$(".anniu button").click(function(){

    //碳黑色
    $(".x_content .w .x_left .x_img ul li:eq(0)").empty();
    ($(".x_content .w .x_left .x_img ul li:eq(0)")).append($("<div id='a0'></div>"));
    $("#a0").addClass("play");
    //碳黑色大图
    $("#big").empty();
    ($("#big")).append($("<div id='bigimg'></div>"));
    $("#bigimg").addClass("play_big");


    //酒红色
    $(".x_content .w .x_left .x_img ul li:eq(1)").empty();
    ($(".x_content .w .x_left .x_img ul li:eq(1)")).append($("<div id='a1'></div>"));
    $("#a1").addClass("play1");
//西红线
    $(".x_content .w .x_left .x_img ul li:eq(2)").empty();
    ($(".x_content .w .x_left .x_img ul li:eq(2)")).append($("<div id='a2'></div>"));
    $("#a2").addClass("play2");
//浅金色
    $(".x_content .w .x_left .x_img ul li:eq(3)").empty();
    ($(".x_content .w .x_left .x_img ul li:eq(3)")).append($("<div id='a3'></div>"));
    $("#a3").addClass("play3");

//巧克力色
    $(".x_content .w .x_left .x_img ul li:eq(4)").empty();
    ($(".x_content .w .x_left .x_img ul li:eq(4)")).append($("<div id='a4'></div>"));
    $("#a4").addClass("play4");
});



});




