/**
 * Created by Robbieen on 2017/6/17.
 */
//鼠标滚动函数；
function myScroll(){
    return{
        top:window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop||0,
        left:window.pageXOffset||document.body.scrollLeft||document.documentElement.scrollLeft||0
    };
};
//路口函数
$(function () {
    //获取电脑窗口的大小,- - >适应不同分辨率；
    var $height=$(window).height();
    var $width=$(window).width();
    //设置index-index5的高度；
    for (var i = 1; i <=5; i++) {
        $('.w_index'+i).css('height',$height);
    };
    //设置index1 中的机型切换效果；
    var $as=$('.w_index1 ul a')
    $($as[0]).css('color','#fff')
    for (var i = 0; i < $as.length; i++) {
        $as[i].index=i;
        $as[i].onclick= function () {
            var index=this.index;
            $('.w_index1 img:eq(0)').stop().fadeOut(500, function () {
                $(this).attr('src','w_images/'+index+'-left.png').fadeIn(800);
            });
            $('.w_index1 img:eq(1)').stop().fadeOut(500, function () {
                $(this).attr('src','w_images/'+index+'-right.png').fadeIn(800);
            });
            for (var j = 0; j < $as.length; j++) {
                $($as[j]).css('color','#808080');
            }
            $(this).css('color','#fff');
        };
    };
    //设置标记，防止抖动；
    var flag=true;
    //设置右侧固定按钮显示效果：
    window.onscroll= function () {
        // icon 显示效果
        $('.w_icon').removeClass('hide');
        if(myScroll().top==0){
            $('.w_icon').addClass('hide');
        };
        //设置固定导航栏；
        if(index<0){
            $('.w_bgnav').css({position:'relative'});
            $('.w_bgindex1').css('marginTop',0);
        }else if(myScroll().top>98){
            $('.w_bgnav').css({position:'fixed',top:'0',width:$width,zIndex:'10'});
            $('.w_bgindex1').css('marginTop',39);
        }
    };
    //获取所有按钮；
    var $btns=$('.w_icon span');
    var timer,target,current;
    var index=-1;
    //获取刷新后当前显示页面对应的index值；并设置当前按钮的显示样式；
    if(myScroll().top>0){
        index=Math.floor(myScroll().top/$height)
    }else{
        index=-1;
    }
    $($btns[index]).addClass('active').siblings().removeClass('active');
    //循环遍历，给每个按钮设置点击事件；
    for (var i =0; i < $btns.length; i++) {
        $btns[i].index=i;
        $btns[i].onclick= function () {
            index=this.index;
            $(this).addClass('active').siblings().removeClass('active');
            //点击按钮后其他按钮对应的元素状态初始化；
            for (var j= 0; j< $btns.length; j++) {
                switch (true){
                    case(j==0&&j!=index):
                        $('.w_index1 img:eq(0)').stop().animate({top:'25%'},50);
                        $('.w_index1 img:eq(1)').stop().animate({top:'25%'},50);
                    case(j==1&&j!=index):
                        $('.w_index2 img:eq(0)').stop().animate({left:'25%'},50);
                        $('.w_index2 img:eq(2)').stop().animate({left:'58%'},50);
                    case(j==2&&j!=index):
                        $('.w_index3 img:eq(0)').stop().animate({top:'66%'},50);
                        $('.w_index3 img:eq(1)').stop().animate({top:'86%'},50);
                    case(j==3&&j!=index):
                        $('.w_index4 img:eq(0)').stop().animate({width:'75%',left:'12%'},50);
                    case(j==4&&j!=index):
                        $('.w_index5 img').stop().animate({width:'68%',left:'17%'},50);
                };
            };
            switch(true){
                case(index==0):slide0();
                    break;
                case(index==1):slide1();
                    break;
                case(index==2):slide2();
                    break;
                case(index==3):slide3();
                    break;
                case(index==4):slide4();
                    break;
            };
            if(flag){
                roll();
            };
        };
    };

    //设置联动；
    window.onmousewheel= function (e) {
        var e= e||window.event;
        //页面向上移动
        if(e.wheelDelta<0){
            //alert('页面向上移动');
            if(flag){
                index++
                if(index>5){
                    if(index==5){
                        $($btns[4]).addClass('active').siblings().removeClass('active');
                        roll();
                    }
                    index=0;
                    //设置按钮的样式
                    $($btns[index]).addClass('active').siblings().removeClass('active');
                    //页面初始化样式；
                    for (var j= 0; j< $btns.length; j++) {
                        switch (true){
                            case(j==0&&j!=index):
                                $('.w_index1 img:eq(0)').stop().animate({top:'25%'},50);
                                $('.w_index1 img:eq(1)').stop().animate({top:'25%'},50);
                            case(j==1&&j!=index):
                                $('.w_index2 img:eq(0)').stop().animate({left:'25%'},50);
                                $('.w_index2 img:eq(2)').stop().animate({left:'58%'},50);
                            case(j==2&&j!=index):
                                $('.w_index3 img:eq(0)').stop().animate({top:'66%'},50);
                                $('.w_index3 img:eq(1)').stop().animate({top:'86%'},50);
                            case(j==3&&j!=index):
                                $('.w_index4 img:eq(0)').stop().animate({width:'75%',left:'12%'},50);
                            case(j==4&&j!=index):
                                $('.w_index5 img').stop().animate({width:'68%',left:'17%'},50);
                        };
                    };
                    switch(true){
                        case(index==0):slide0();
                            break;
                        case(index==1):slide1();
                            break;
                        case(index==2):slide2();
                            break;
                        case(index==3):slide3();
                            break;
                        case(index==4):slide4();
                            break;
                    };
                    roll();
                }else{
                    $($btns[index]).addClass('active').siblings().removeClass('active');
                    for (var j= 0; j< $btns.length; j++) {
                        switch (true){
                            case(j==0&&j!=index):
                                $('.w_index1 img:eq(0)').stop().animate({top:'25%'},50);
                                $('.w_index1 img:eq(1)').stop().animate({top:'25%'},50);
                            case(j==1&&j!=index):
                                $('.w_index2 img:eq(0)').stop().animate({left:'25%'},50);
                                $('.w_index2 img:eq(2)').stop().animate({left:'58%'},50);
                            case(j==2&&j!=index):
                                $('.w_index3 img:eq(0)').stop().animate({top:'66%'},50);
                                $('.w_index3 img:eq(1)').stop().animate({top:'86%'},50);
                            case(j==3&&j!=index):
                                $('.w_index4 img:eq(0)').stop().animate({width:'75%',left:'12%'},50);
                            case(j==4&&j!=index):
                                $('.w_index5 img').stop().animate({width:'68%',left:'17%'},50);
                        };
                    };
                    switch(true){
                        case(index==0):slide0();
                            break;
                        case(index==1):slide1();
                            break;
                        case(index==2):slide2();
                            break;
                        case(index==3):slide3();
                            break;
                        case(index==4):slide4();
                            break;
                    };
                    roll();
                };
            }
        };
        //页面向下移动；
        if(e.wheelDelta>0){
            if(flag){
                index--
                if(index<-1){
                    index=-1;
                    return false;
                }else if(index== -1){
                    //设置按钮的样式
                    $('.w_icon').toggleClass('active');
                    //所有页面样式初始化（当前显示页面保留样式）；
                    for (var j= 0; j< $btns.length; j++) {
                        switch (true){
                            case(j==0&&j!=index):
                                $('.w_index1 img:eq(0)').stop().animate({top:'25%'},1000);
                                $('.w_index1 img:eq(1)').stop().animate({top:'25%'},1000);
                            case(j==1&&j!=index):
                                $('.w_index2 img:eq(0)').stop().animate({left:'25%'},50);
                                $('.w_index2 img:eq(2)').stop().animate({left:'58%'},50);
                            case(j==2&&j!=index):
                                $('.w_index3 img:eq(0)').stop().animate({top:'66%'},50);
                                $('.w_index3 img:eq(1)').stop().animate({top:'86%'},50);
                            case(j==3&&j!=index):
                                $('.w_index4 img:eq(0)').stop().animate({width:'75%',left:'12%'},50);
                            case(j==4&&j!=index):
                                $('.w_index5 img').stop().animate({width:'68%',left:'17%'},50);
                        };
                    };
                    //设定缓动效果（利用命名函数）；
                    roll();
                }else{
                    $($btns[index]).addClass('active').siblings().removeClass('active');
                    //所有页面样式初始化（当前显示页面保留样式）；
                    for (var j= 0; j< $btns.length; j++) {
                        switch (true){
                            case(j==0&&j!=index):
                                $('.w_index1 img:eq(0)').stop().animate({top:'25%'},50);
                                $('.w_index1 img:eq(1)').stop().animate({top:'25%'},50);
                            case(j==1&&j!=index):
                                $('.w_index2 img:eq(0)').stop().animate({left:'25%'},50);
                                $('.w_index2 img:eq(2)').stop().animate({left:'58%'},50);
                            case(j==2&&j!=index):
                                $('.w_index3 img:eq(0)').stop().animate({top:'66%'},50);
                                $('.w_index3 img:eq(1)').stop().animate({top:'86%'},50);
                            case(j==3&&j!=index):
                                $('.w_index4 img:eq(0)').stop().animate({width:'75%',left:'12%'},50);
                            case(j==4&&j!=index):
                                $('.w_index5 img').stop().animate({width:'68%',left:'17%'},50);
                        };
                    };
                    //设置当前显示页面的样式
                    switch(true){
                        case(index==0):slide0();
                            break;
                        case(index==1):slide1();
                            break;
                        case(index==2):slide2();
                            break;
                        case(index==3):slide3();
                            break;
                        case(index==4):slide4();
                            break;
                    };
                    //设定缓动效果（利用命名函数）；
                    roll();
                };
            }
        }
    }

    //封装函数
    function roll(){
        flag=false;
        clearInterval(timer);
        target=index>=0?index*$height+138:0;
        target= index>4? 4*$height+138+260:target;
        timer=setInterval(function () {
            current=myScroll().top;
            var step=(target-current)/10;
            step= step>0? Math.ceil(step):Math.floor(step);
            current+=step;
            window.scrollTo(0,current);
            //运动到当前页面，设置是否进行下次点击事件；
            if(target==current){
                flag=true;
                clearInterval(timer);
            };
        },20)
    };
    //index1 图片上移
    function slide0(){
        $('.w_index1 img:eq(0)').stop().animate({top:'-25%'},2000);
        $('.w_index1 img:eq(1)').stop().animate({top:'-25%'},2000);
    };
    //index2 图片分散
    function slide1(){
        $('.w_index2 img:eq(0)').stop().animate({left:'23%'},2500);
        $('.w_index2 img:eq(2)').stop().animate({left:'60%'},2500);
    };
    //index3 图片上划；
    function slide2(){
        $('.w_index3 img:eq(0)').stop().animate({top:'40%'},1500);
        $('.w_index3 img:eq(1)').stop().animate({top:'76%'},1000);
    };
    //index4 图片放大；
    function slide3(){
        $('.w_index4 img:eq(0)').stop().animate({width:'84%',left:'8%'},1800);
    };
    //index5 图片放大；
    function slide4(){
        $('.w_index5 img').stop().animate({width:'76%',left:'13%'},1890);
    };

})


