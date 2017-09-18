/**
 * Created by Administrator on 2017/6/21.
 */

    /*====================入口函数===================*/
$(function(){
    //获取当前浏览器窗口的高度；
    var $height= $(window).height();

    /*=============滚动固定高度后弹出固定导航栏和侧边页面小按钮======*/
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();
        var topHeight = $(".topnav").height();
        /*================淡入效果============*/
        if (scrollTop>topHeight){
            $(".fixednav").addClass("fixednavbar");
            $(".fixednav").fadeIn();
            $("#fixedbtn").fadeIn();
            $('.topnavbar').css('display','none')

            /*=================肉感时代缓动效果============*/
            if(scrollTop>=$height-30&&scrollTop<$height*2-100){
                $('.secsbox').stop().animate({top:10},1400)
            }else{
                $('.secsbox').stop().animate({top:100});
            };

            /*=================大红大金时代缓动效果============*/
            if(scrollTop>=$height*2-30&&scrollTop<$height*3-180){
                $(".trdbg>div>div").fadeIn(1000);
            }else {
                $(".trdbg>div>div").fadeOut(1000);
            }

            /*================改变人类进程足迹缓动效果===========*/
            if(scrollTop>=$height*4-30){
                $("#timePhone").animate({left:158},1500);
            }

        };
        /*================淡出效果============*/
        if(scrollTop<topHeight){
            $(".fixednav").remove("fixednavbar");
            $(".fixednav").fadeOut();
            $("#fixedbtn").fadeOut();
            $('.topnavbar').css('display','block')
        }
    })

    /*=======================点击按钮设置页面滚动效果==================*/
    $("#fixedbtn li").click(function(){
        var $this=$(this);
        var index=$this.index();
        var contentBox=$(".content li").eq(index);
        var contentTop=107+index*$height;
        window.scrollTo(0,contentTop);
        //设置按钮样式；
        $(this).addClass('hover').siblings().removeClass('hover');
    })

    /*======================大红大金时代按钮点击================*/
    $("#phonebtn li").click(function(){
        var $this=$(this);
        var index=$this.index();

        /*======================当个索引对应的div==================*/
        var thirdDiv=$(".third>div").eq(index);

        /*======================样式数组==========================*/
        var trdbboxArr=["carbon","winered","redline","chocolate","golden"];

        /*======================改变背景盒子======================*/
        thirdDiv.fadeIn().siblings().fadeOut();

        /*======================永远显示按钮盒子==================*/
        $(".trdbbox").fadeIn();

        /*======================遍历样式数组去除所有样式===========*/
        for(var j=0;j<trdbboxArr.length;j++){
            $(".trdbbox").removeClass(trdbboxArr[j]);
        }

        /*======================增加当前背景对应样式==================*/
        $(".trdbbox").addClass(trdbboxArr[index]);
    })


    /*======================坚果盒子按钮点击==================*/
    var proIndex=1;
    /*======================坚果右按钮=======================*/
    $("#proRightBtn").click(function(){
        /*======================匹配li对应的索引值================*/
        var proUl=$("#proUl li").eq(proIndex);
        /*==================为第一个li做出判断调整为第二个li========*/
        if(proIndex==1){
            proUl=$("#proUl li").eq(0);
        }
        /*==================设置当前滑出，下一个滑入事件============*/
        proUl.slideDown().next().slideUp();
        proIndex++;
        if(proIndex>5){
            proIndex=5;
            $("#proRightBtn").stop(true,true);
        }
        /*==================左侧按钮显示========================*/
        $("#proLeftBtn").show();
    })

    /*======================坚果左按钮=======================*/
    $("#proLeftBtn").click(function(){
        proIndex--;
        /*======================匹配li对应的索引值================*/
        var proUl=$("#proUl li").eq(proIndex);
        /*==================为第0个li做出判断调整为第1个li========*/
        if(proIndex==0){
            proUl=$("#proUl li").eq(1);
        }
        /*==================设置当前滑出，下一个滑入事件============*/
        proUl.slideDown().next().slideUp();
    })



    /*======================时间按钮点击==================*/
    var index=0;
    /*======================时间右按钮======================*/
    $("#rightTimeBtn").click(function(){

        /*======================改变时间=====================*/
        index++;
        var timeDate=$("#timeDate>div").eq(index);
        timeDate.fadeIn().siblings().fadeOut();


        /*======================清除之前动画=====================*/
        $("#timePhone").stop(true,true);
        /*======================ul移动=====================*/
        $("#timePhone").animate({left: "-=158"});

    })

    /*======================时间左按钮======================*/
    $("#leftTimeBtn").click(function(){


        /*======================改变时间=====================*/
        index--;
        var timeDate=$("#timeDate>div").eq(index);
        timeDate.fadeIn().siblings().fadeOut();


        /*======================清除之前移动=====================*/
        $("#timePhone").stop(true,true);
        /*======================ul移动=====================*/
        $("#timePhone").animate({left:"+=158"});
        $("#leftTimeBtn").removeClass("leftlight").addClass("leftdeep");
    })
})
