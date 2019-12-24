
//从下面开始是调用方法

$(function(){
	//tab选项卡插件1调用
	$('#tab_tit1 li').tabHoverDelay('#tab_con1');
	
	//另一种可设置参数的调用方法
//	$('#tab_tit1 li').tabHoverDelay('#tab_con1',{
//		tabTitClass : 'current',	//标题容器的class，熟悉吧
//		tabConClass : 'allic'		//内容容器的class
//	});


})

//焦点图
$(function(){
    //调用
    $.bannerSwitch({
            boxId : '#box1',            //容器的ID
            titId : '#tit1',            //控制按钮的容器ID
            conId : '#con1',            //切换内容的容器ID
            titElement : 'li',          //控制按钮容器内的HTML元素，默认为li
            conElement : 'li',          //切换内容容器内的HTML元素，默认为li
            titOnClass : 'active',      //控制按钮的class，用来表示ON状态，默认为active
            conOnClass : 'div_con',     //切换内容的class，默认为div_con
            auto : true,                //是否自动切换，true和false，默认为true
            autoTime : 3500,            //自动切换的间隔时间
            hoverDuring : 200,          //鼠标移入延迟时间
            outDuring : 200,             //鼠标移出的延迟时间
            button : true               //是否显示前进后退按钮
    });
    
})


