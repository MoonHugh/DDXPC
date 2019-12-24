/**
 * Created by Administrator on 2017/5/20.
 */
/*
 *
 * 判断PC端与WAP端
 */
var mobile_bs = {
    versions: function() {
        var u = navigator.userAgent;
        return {
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1,  //opera内核
            webKit: u.indexOf('AppleWebKit') > -1,  //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,  //火狐内核
            mobile: !! u.match(/AppleWebKit.*Mobile.*/) || !! u.match(/AppleWebKit/) && u.indexOf('QIHU') && u.indexOf('QIHU') > -1 && u.indexOf('Chrome') < 0,  //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),  //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,  //android终端或者uc浏览器
            iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1,   //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1,     //是否iPad
            webApp: u.indexOf('Safari') == -1   //是否web应该程序，没有头部与底部
        }
    } ()
};

if (mobile_bs.versions.mobile) {
    if (mobile_bs.versions.android || mobile_bs.versions.iPhone || mobile_bs.versions.iPad || mobile_bs.versions.ios) {
        window.location.href = "http://m.ddxstore.com/";
    }
};
$(document).ready(function () {

    var swiperO = new Swiper('.swiper-container-out', {
        pagination: '.swiper-pagination',
        direction: 'vertical',
        slidesPerView: 1,
        simulateTouch : false,
        paginationClickable: true,
        mousewheelControl: true,
        onSlideChangeEnd: function(swiper){
            if(swiper.activeIndex==1){
                $(".advantage_con li .ad_img").addClass("slideInDown");
                $(".ad_tit").addClass("slideInUp");
                $(".ad_text").addClass("slideInUp");
            }else{
                $(".advantage_con li .ad_img").removeClass("slideInDown");
                $(".ad_tit").removeClass("slideInUp");
                $(".ad_text").removeClass("slideInUp");
            }
            if(swiper.activeIndex==2){
               $("#user_call li").addClass("out");
        }else {
                $("#user_call li").removeClass("out");
            }
        }
    });
    var swiperI = new Swiper('.swiper-container-in', {
        slidesPerView:'auto',
        spaceBetween : 26,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next'
    });
    $(".shift_icon").click(function () {
        $("#user_call li img").removeClass("hide");
        $("#user_call li").removeClass("bg_source activeLi");
         for(i=0; i<$("#user_call li").length; i++){
             $("#user_call li").eq(i).css("background","#ffc2d8");
         }
    });
    $(".bg_icon").click(function () {
        $("#user_call li img").addClass("hide");
        for(i=0; i<$("#user_call li").length; i++){
            $("#user_call li").eq(i).css({"background":"url('images/index/bg" + (i + 1)+".png')no-repeat","background-size":"cover"});
        }
        $("#user_call li").addClass("bg_source").removeClass("activeLi");
    });

    $("#user_call li").click(function () {
        $(this).addClass("activeLi").siblings().removeClass("activeLi");
        var t = $(this).index() + 1;
        if($(this).hasClass("bg_source")){
                $(".model_box").css({"background":"url('images/index/bg" + t +".png')no-repeat","background-size":"cover"})
        }else {
                $(".modelbar").attr("src","images/index/shift"+ t +"_1.png");
        }
    });
// 背景动画

    //定义画布宽高和生成点的个数
    var WIDTH = window.innerWidth, HEIGHT = window.innerHeight, POINT = 40;

    var canvas = document.getElementById('canvas');
    canvas.width = WIDTH,
        canvas.height = HEIGHT;
    var context = canvas.getContext('2d');
    context.strokeStyle = 'rgba(0,0,0,0.09)',
        context.strokeWidth = 1,
        context.fillStyle = 'rgba(0,0,0,0.05)';
    var circleArr = [];

    //线条：开始xy坐标，结束xy坐标，线条透明度
    function Line (x, y, _x, _y, o) {
        this.beginX = x,
            this.beginY = y,
            this.closeX = _x,
            this.closeY = _y,
            this.o = o;
    }
    //点：圆心xy坐标，半径，每帧移动xy的距离
    function Circle (x, y, r, moveX, moveY) {
        this.x = x,
            this.y = y,
            this.r = r,
            this.moveX = moveX,
            this.moveY = moveY;
    }
    //生成max和min之间的随机数
    function num (max, _min) {
        var min = arguments[1] || 0;
        return Math.floor(Math.random()*(max-min+1)+min);
    }
    // 绘制原点
    function drawCricle (cxt, x, y, r, moveX, moveY) {
        var circle = new Circle(x, y, r, moveX, moveY)
        cxt.beginPath()
        cxt.arc(circle.x, circle.y, circle.r, 0, 2*Math.PI)
        cxt.closePath()
        cxt.fill();
        return circle;
    }
    //绘制线条
    function drawLine (cxt, x, y, _x, _y, o) {
        var line = new Line(x, y, _x, _y, o)
        cxt.beginPath()
        cxt.strokeStyle = 'rgba(0,0,0,'+ o +')'
        cxt.moveTo(line.beginX, line.beginY)
        cxt.lineTo(line.closeX, line.closeY)
        cxt.closePath()
        cxt.stroke();

    }
    //初始化生成原点
    function init () {
        circleArr = [];
        for (var i = 0; i < POINT; i++) {
            circleArr.push(drawCricle(context, num(WIDTH), num(HEIGHT), num(15, 2), num(10, -10)/40, num(10, -10)/40));
        }
        draw();
    }

    //每帧绘制
    function draw () {
        context.clearRect(0,0,canvas.width, canvas.height);
        for (var i = 0; i < POINT; i++) {
            drawCricle(context, circleArr[i].x, circleArr[i].y, circleArr[i].r);
        }
        for (var i = 0; i < POINT; i++) {
            for (var j = 0; j < POINT; j++) {
                if (i + j < POINT) {
                    var A = Math.abs(circleArr[i+j].x - circleArr[i].x),
                        B = Math.abs(circleArr[i+j].y - circleArr[i].y);
                    var lineLength = Math.sqrt(A*A + B*B);
                    var C = 1/lineLength*7-0.009;
                    var lineOpacity = C > 0.03 ? 0.03 : C;
                    if (lineOpacity > 0) {
                        drawLine(context, circleArr[i].x, circleArr[i].y, circleArr[i+j].x, circleArr[i+j].y, lineOpacity);
                    }
                }
            }
        }
    }

    //调用执行
    window.onload = function () {
        init();
        setInterval(function () {
            for (var i = 0; i < POINT; i++) {
                var cir = circleArr[i];
                cir.x += cir.moveX;
                cir.y += cir.moveY;
                if (cir.x > WIDTH) cir.x = 0;
                else if (cir.x < 0) cir.x = WIDTH;
                if (cir.y > HEIGHT) cir.y = 0;
                else if (cir.y < 0) cir.y = HEIGHT;

            }
            draw();
        }, 16);
    };
});

