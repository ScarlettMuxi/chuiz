//根据id获取单个元素
function my$(id) {
    return document.getElementById(id);
}


//获取innerText或者是获取textContent
function getInnerTxt(element) {//element表示的标签
    return element.innerText ? element.innerText : element.textContent;
}


//设置innerText或者是设置textContent
function setInnerText(element, value) {
    if (element.innerText) {
        element.innerText = value;
    } else {
        element.textContent = value;
    }
}



//获取的是当前父级元素中的第一个子元素----兼容代码
function getFirstElement(element) {
    if (element.firstElementChild) {
        //浏览器如果支持这个属性则直接返回第一个子元素
        return element.firstElementChild;
    } else {//浏览器不支持firstElementChild属性
        var node = element.firstChild;//获取父元素中的第一个子节点
        //如果node不为空,并且node的类型是1,则证明是一个标签,如果不是则继续找后面的子节点
        while (node && node.nodeType != 1) {
            node = node.nextSibling;//当前子节点的下一个节点
        }
        //如果循环结束,表示node中存储的是一个标签节点
        return node;
    }
}


//获取的是当前父级元素中的最后一个子元素---兼容代码
function getLastElement(element) {
    if (element.lastElementChild) {//浏览器支持这个属性则直接返回
        return element.lastElementChild;
    } else {//浏览器不支持这个属性
        var node = element.lastChild;
        while (node && node.nodeType != 1) {
            //这个节点不是标签,继续向前找节点
            node = node.previousSibling;
        }
        return node;
    }
}


//获取当前元素的后一个兄弟元素
function getNextElement(element) {
    if (element.nextElementSibling) {
        return element.nextElementSibling;
    } else {
        var node = element.nextSibling;
        while (node && node.nodeType != 1) {
            node = node.nextSibling;
        }
        return node;
    }
}



//获取当前元素的前一个兄弟元素
function getPreviousElement(element) {
    if (element.previousElementSibling) {
        return element.previousElementSibling;
    } else {
        var node = element.previousSibling;
        while (node && node.nodeType != 1) {
            node = node.previousSibling;
        }
        return node;
    }
}



//获取当前元素的兄弟元素
function getSiblingElement(element) {
    var elements = [];//保存当前元素的前面所有元素和后面所有元素
    var ele = element.previousSibling;
    while (ele) {
        if (ele.nodeType == 1) {
            elements.push(ele);
        }
        ele = ele.previousSibling;
    }
    ele = element.nextSibling;
    while (ele) {
        if (ele.nodeType == 1) {
            elements.push(ele);
        }
        ele = ele.nextSibling;
    }
    return elements;
}

//animate缓动动画
function animate(tag,datas,f1){
    clearInterval(tag.timer);
    tag.timer=setInterval(function(){
//            假设成立法  控制所有目标位置到位
        var flag=true;
//            遍历对象里面的{样式名：数据}
        for(var k in datas){
            if(k=="opacity"){
                //                把对象里的数值赋值给target
                var target=datas[k]*1000;
                //            记录当前位置
                var current=getStyle(tag,k)*1000||0;
//            记录每次移动距离
                var step=(target-current)/10;
//            判断step是否小于|+-1|并取整
                step=step<0?Math.floor(step):Math.ceil(step);
//            运动公式
                current=current+step;

                tag.style[k]=current/1000;
//           验证假设成立法   判断是否到达目标位置
                if(current!=target){
                    flag=false;
                }
            }else if(k=="zIndex"){
                tag.style.zIndex=datas[k];
            }else {
                //                把对象里面的数据赋值给target
                var target=datas[k];
                //            记录当前位置
                var current=parseInt(getStyle(tag,k))||0;
//            记录每次移动距离
                var step=(target-current)/10;
//            判断step是否小于|+-1|并取整
                step=step<0?Math.floor(step):Math.ceil(step);
//            运动公式
                current=current+step;

                tag.style[k]=current+"px";
//           验证假设成立法   判断是否到达目标位置
                if(current!=target){
                    flag=false;
                }
            }
        }
//            确定所有式样都到目标位置就清除定时器
        if(flag){
            clearInterval(tag.timer);
//    判断 有传入f1函数参数才能调用（严谨代码）      //f1&&f1()====简化方式代码
            if(typeof f1=="function"){
                f1();
            }
        }
    },20);
};



//    获取任意元素的样式
function getStyle(tag,arrt){
    if(tag.currentStyle){
        return tag.currentStyle[arrt];
    }else {
        return getComputedStyle(tag,null)[arrt];
    }
};

//获取卷曲尺寸的封装函数  兼容ie chrom fox
function myScroll(){
    return{
        //距离上部
        scrollTop:window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop,
        //距离左边
        scrollLeft:window.pageXOffset||document.body.scrollLeft||document.documentElement.scrollLeft
    };
};


//页面获取可视区域时的尺寸
function myClient() {
    return {
        //宽
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        //高
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    };
}