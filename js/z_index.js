function myScroll(){
	    return{
	        top:window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop||0,
	        left:window.pageXOffset||document.body.scrollLeft||document.documentElement.scrollLeft||0
	    };
	};
$(function(){
	$(".z_main1 .z_img").animate({bottom:0},200)
	//滚动条滚动函数；
	
    //获取窗口大小  自适不同电脑应分辨率  整屏显示
    $height=$(window).height();
    $width=$(window).width();
   //5要改成for 或者 each
   //设置main的高度为窗口高度
    for(var i=0;i<5;i++){
        $(".z_main"+i).css("height",$height);
        // $(".z_main"+i).Smartisan_css("width",$width);//不要给最外层盒子设置宽高，因为宽高成比例；会导致高不动态占整屏
    }

    // 设置点击固定按钮翻页效果 
    var topH=$(".w_bgtop").height();
    $(window).scroll(function(){
     	if(myScroll().top>=topH){
	         $(".z_page_btn").removeClass("z_hide");
	         $(".w_bgnav").addClass("z_nav_fixed");
	         $(".z_title_content").css("top","$('.w_bgnav').height()"+80+"px");
	    }else{
	     	$('.z_page_btn').addClass('z_hide');
	     	$(".w_bgnav").removeClass("z_nav_fixed")
	         }
    })

	//点击每个按钮显示对应页面,其他页面动画恢复默认状态；
    	$(".z_page_btn span").click(function(){
    	$(this).addClass("z_btn_active").siblings().removeClass('z_btn_active');
	    var $btnLenght=$(".z_page_btn span");
	    // var $btnindex=$(".z_page_btn span").index();
	    if($(this).index()==0){
	    	$(window).scrollTop(0);
	    	$(".z_main1 .z_img").animate({bottom:0},200);
	    	$(".z_main2 .z_img").animate({top:"24%"});
	        $(".z_main3 .z_phone_left_view").animate({left:0});
	        $(".z_main3 .z_phone_right_view").animate({right:0});
	        $(".z_main4 .z_animate_imgbox li").animate({padding:"0 34px"});
	    }else {
	    	// $(window).scrollTop($(this).index()*$(window).height()+$(".w_bgnav").height());
	    	$(window).animate({scrollTop:$(window).scrollTop($(this).index()*$(window).height()+$(".w_bgtop").height())},2000)
	    }
         var mainIndex=$(".z_main").index();
	    //设置点击按钮每个页面出现动画
	    //for(var k=0;k<$btnLenght.lenght;k++){
	    	// var indeB=this.index;
	        if($(this).index()==1){
	        	$(".z_main2 .z_img").animate({top:"18%"},500);
	            $(".z_main1 .z_img").animate({bottom:-30});
	            $(".z_main3 .z_phone_left_view").animate({left:0})
	        	$(".z_main3 .z_phone_right_view").animate({right:0})
	        	$(".z_main4 .z_animate_imgbox li").animate({padding:"0 34px"})
	        }
	         if($(this).index()==2){
	        	$(".z_main3 .z_phone_left_view").animate({left:"6%"},500);
	        	$(".z_main3 .z_phone_right_view").animate({right:"6%"},500);
	        	$(".z_main1 .z_img").animate({bottom:-30});
	        	$(".z_main2 .z_img").animate({top:"24%"});
	        	$(".z_main4 .z_animate_imgbox li").animate({padding:"0 34px"})
	        }
	        if($(this).index()==3){	    
	        	$(".z_main4 .z_animate_imgbox li").animate({padding:"0 10px"},800);
	            $(".z_main4 .z_animate_imgbox ul").animate({left:"6%"},800);
	            $(".z_main2 .z_img").animate({top:"24%"});
	            $(".z_main1 .z_img").animate({bottom:-30});
	            $(".z_main3 .z_phone_left_view").animate({left:0})
	        	$(".z_main3 .z_phone_right_view").animate({right:0})
	        }   	    
    })

   //设置鼠标滚轮事件
   var flag=true;
   var $pageBtn=$(".z_page_btn span");
    var timer,target,current;
    var index=-1;
    if(myScroll().top>0){
        index=Math.floor(myScroll().top/$height)
    }else{
        index=-1;
    }
    for (var i =0; i < $pageBtn.length; i++) {
        $pageBtn[i].index=i;
        // alert(i)
        index=$pageBtn[i].index;
        // console.log(index);
    }
   window.onmousewheel= function (e) {
        var e= e||window.event;
        //页面向上移动
        if(e.wheelDelta<0){
            //alert('页面向上移动');
            if(flag){
                index++                  
                // console.log(index);
                if(index>3){
                    index=0;
                    //设置按钮的样式
                    // $(".z_page_btn span:eq(index)").addClass('z_btn_active').siblings().removeClass('z_btn_active');
                  //  for(var j=0;j<$(".z_page_btn span").length;j++){
                    	// var btnObj=$(".z_page_btn span")[j];
                        $(".z_page_btn span:eq(j)").addClass("z_btn_active").siblings().removeClass('z_btn_active');
                    	if(myScroll().top==$(window).height()*1){
                    		console.log(myScroll().top);
                    		// console.log(index);
						    	$(window).scrollTop(0);
						    	$(".z_main1 .z_img").stop().animate({bottom:-20},500);
						    	// $(".z_main2 .z_img").animate({top:"24%"});
						        // $(".z_main3 .z_phone_left_view").animate({left:0});
						        // $(".z_main3 .z_phone_right_view").animate({right:0});
						        // $(".z_main4 .z_animate_imgbox li").animate({padding:"0 34px"});
						    }
                    if(myScroll().top==$(window).height()*2){
                    	console.log(j);
	        	// $(".z_main2 .z_img").animate({top:"18%"},500);
	            $(".z_main1 .z_img").animate({bottom:-30},500);
	         //    $(".z_main3 .z_phone_left_view").animate({left:0})
	        	// $(".z_main3 .z_phone_right_view").animate({right:0})
	        	// $(".z_main4 .z_animate_imgbox li").animate({padding:"0 34px"})
	        }
	         if(myScroll().top==$(window).height()*3){
	        	// $(".z_main3 .z_phone_left_view").animate({left:"6%"},500);
	        	// $(".z_main3 .z_phone_right_view").animate({right:"6%"},500);
	        	// $(".z_main1 .z_img").animate({bottom:-30});
	        	$(".z_main2 .z_img").animate({top:"16%"},500);
	        	  $(".z_main3 .z_phone_left_view").animate({left:110})
	        	$(".z_main3 .z_phone_right_view").animate({right:110})
	        	// $(".z_main4 .z_animate_imgbox li").animate({padding:"0 34px"})
	        }
	        if(myScroll().top==$(window).height()*3){	    
	        	$(".z_main4 .z_animate_imgbox li").animate({padding:"0 10px"},800);
	            $(".z_main4 .z_animate_imgbox ul").animate({left:"6%"},800);
	         //    $(".z_main2 .z_img").animate({top:"24%"});
	         //    $(".z_main1 .z_img").animate({bottom:-30});
	            $(".z_main3 .z_phone_left_view").animate({left:110})
	        	$(".z_main3 .z_phone_right_view").animate({right:110})
	        }   	    
                }
                    roll();
                }
                else{
                
                    roll();
                };
           // }
        };



//页面向下移动；
        if(e.wheelDelta>0){
            index--
            // console.log(index)
            if(index<-1){
                index=-1;
                return false;
            }else if(index== -1){
                
                roll();
            }else{
             
                roll();
            };
        }
    }
        function roll(){
        flag=false;
        clearInterval(timer);
        var nabH=$(".w_bgtop").height();
        target=index>=0?index*$height+nabH:0;
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










        	// if(flag){
        	// 	//当index=0，整屏高度是main1高度加上top高度；
        	// 		/*$(".z_page_btn span")[i].index=i;
        	// 		  index=i;*/
        			  
        	// // 		if(index==0){ 
		       // //  	$(window).animate({scrollTo:$(".w_bgtop").height()},2000);
		       // //  	// console.log($(window).height())
		       // //      // $(".z_main1").Smartisan_css("marginTop","128px");
        	// // // ..............
        	// // 	console.log(index)
        	// //  $(".z_page_btn span:eq(index)").addClass("z_btn_active").siblings().removeClass('z_btn_active');
         // //    $(window).animate({scrollTop:$(window).scrollTop(index*$(window).height()+$(".w_bgtop").height())},2000)
        	// // 	}
        	// }
        	
        // }
  
})