/**
 * Created by 杨士权 on 2017/6/17.
 */
$(function () {
    $(".show").mouseenter(function () {
        $(this).parent().parent().parent().css("background-color", "white");
        $(".show ").children(".y-nav-bom").stop().slideDown(300);
    });
});

$(function () {
    $(".show").mouseleave(function () {
        $(".show").children(".y-nav-bom").stop().slideUp(300);
        $(this).parent().parent().parent().css("background-color", "#e5e5e5");
    });
});

//轮播图部分
//获取元素
var box = document.getElementById("y-banner");
var box1 = box.children[0];//可视区域
var imgWid = box1.offsetWidth;//图片的宽度
var list = box1.children[0];//运动的ul
var lisUl1 = list.children; //所有的图片盒子
var ul2 = box1.children[1];//获取小按钮的父盒子
var lisUl2 = ul2.children;  //获取所有的小圆点
lisUl2[0].className="current";
// 3简单轮播图效果
for(var i = 0 ; i<lisUl2.length;i++){
  lisUl2[i].index=i;
    lisUl2[i].onclick=function () {
        //3.1  按钮变色
        for(var i = 0 ; i<lisUl2.length;i++){
          lisUl2[i].className="";
        }
        this.className="current";

        //3.2  设置ul滚动
        animate(list,-this.index*imgWid);
        //设置count的值跟按钮索引值同步
        count=this.index;
    };
}
var count = 0;
//下一张
function next() {
    if (count == lisUl1.length - 1) {
        list.style.left = 0 + "px";  //将ul抽回到第一张显示的位置
        count = 0;                 //将count的值和ul运动的位置进行同步
    }

    count++;
    animate(list, -count * imgWid);

    //将count作为索引值，设置lisOl中的对应li的类名
    for (var i = 0; i < lisUl2.length; i++) {
        lisUl2[i].className = "";
    }
    //检测，如果当前显示的是假的第一张，设置按钮1显示颜色
    if (count == lisUl1.length - 1) {
        lisUl2[0].className = "current";
    } else {
        lisUl2[count].className = "current";
    }
}
//  5 自动播放
var timer = null;
timer = autoPlay();
box.onmouseover = function () {
    clearInterval(timer);
};
box.onmouseout = function () {
    timer = autoPlay();
}
function autoPlay() {
    return setInterval(function () {
        next();
    }, 2000);
}

function animate(tag, target) {
    clearInterval(tag.timer);
    tag.timer = setInterval(function () {
        //1 获取元素当前位置
        var current = tag.offsetLeft;
        //2 设置步长: (target - current)/10
        var step = (target - current) / 10;

        //2.1 由于offsetLeft取值会四舍五入，所以我们只需要保证step值不会特别小
        //console.log(step);
        //根据step的正负，设置不同的取整方式
        step = step > 0 ? Math.ceil(step) : Math.floor(step);

        //3 设置运动公式
        current = current + step;
        //4 设置给left
        tag.style.left = current + "px";

        //5 当元素运动到了指定位置清除定时器
        if (current == target) {
            clearInterval(tag.timer);
        }

    }, 20);
}

$(function () {
    $(".y-use-w li").mouseenter(function () {
        $(this).children("a").stop().fadeIn(500).siblings().stop().hide().parent().parent().parent().siblings().stop().fadeOut();
    });
    $(".y-use-w li").mouseleave(function () {
        $(".y-use-w li").children("a").stop().fadeOut(500).siblings().stop().show();
    });
});

$(function () {
    $(".y-use-top-w").mouseenter(function () {
        $(this).children(".y-use-iz").fadeIn().siblings().hide();
    });
    $(".y-use-top-w").mouseleave(function () {
        $(".y-use-top-w").children(".y-use-iz").fadeOut().hide().siblings().show();
    });
});

$(function () {
    $(".y-use-iz div").mouseenter(function () {
        $(this).stop().fadeTo(300,0.8).siblings().stop().fadeTo(1);
    });
    $(".y-use-iz div").mouseleave(function () {
        $(".y-use-iz div").stop().fadeTo(300,1);
    });
});
$(function () {
   $(".y-use-im").mouseenter(function () {
       $(this).children(".y-use-ib").fadeIn().siblings().hide();
   }) ;
    $(".y-use-im").mouseleave(function () {
        $(".y-use-im").children("img").show().siblings().hide();
    })
});
$(function () {
    $(".y-use-ib .y-use-in").mouseenter(function () {
        $(this).children("a").css("background-color","#eeeeee");
    })
    $(".y-use-ib .y-use-in").mouseleave(function () {
        $(".y-use-in").children("a").css("background-color","#fafafa");
    })
})