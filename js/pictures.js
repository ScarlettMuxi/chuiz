/**
 * Created by 白建朝 on 2017/6/18.
 */
 function myScroll(){
	    return{
	        top:window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop||0,
	        left:window.pageXOffset||document.body.scrollLeft||document.documentElement.scrollLeft||0
	    };
	};
$(function(){
	 var $pageHeight=$(window).height();
	 for(var i=0;i<4;i++){
        $(".div"+i).css("height",$pageHeight);
  }
	$(".ul li").click(function(){
		console.log($(".ul li"))
    	$(this).addClass("active").siblings().removeClass('active');
    if($(this).index()==0){
	    	$(window).scrollTop(0);
	    	// $(".z_main1 .z_img").animate({bottom:0},200);
	    	// $(".z_main2 .z_img").animate({top:"24%"});
	     //    $(".z_main3 .z_phone_left_view").animate({left:0});
	     //    $(".z_main3 .z_phone_right_view").animate({right:0});
	     //    $(".z_main4 .z_animate_imgbox li").animate({padding:"0 34px"});
	    }else {
	    	$(window).animate({scrollTop:$(window).scrollTop($(this).index()*$(window).height()+$(".header").height()+$(".nav-sub-wrapper").height())},2000)
	    }
	})
})
