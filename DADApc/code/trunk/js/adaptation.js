
	document.getElementsByTagName("html")[0].style.fontSize = document.documentElement.clientWidth / 750 * 100 + "px";
window.onresize = function () {
    document.getElementsByTagName("html")[0].style.fontSize = document.documentElement.clientWidth / 750 * 100 + "px";
};

$(document).ready(function(){
	/**
	* ajax封装
	* url 发送请求的地址
	* data 发送到服务器的数据，数组存储，如：{"date": new Date().getTime(), "state": 1}
	* async 默认值: true。默认设置下，所有请求均为异步请求。如果需要发送同步请求，请将此选项设置为 false。
	* 注意，同步请求将锁住浏览器，用户其它操作必须等待请求完成才可以执行。
	* type 请求方式("POST" 或 "GET")， 默认为 "GET"
	* dataType 预期服务器返回的数据类型，常用的如：xml、html、json、text
	* successfn 成功回调函数
	* errorfn 失败回调函数
	*/
	jQuery.ax=function(url, data, async, type, dataType, successfn, errorfn,contentType) {
		contentType = (contentType==null || contentType=="" || typeof(contentType)=="undefined")? "application/x-www-form-urlencoded" : contentType;
	async = (async==null || async=="" || typeof(async)=="undefined")? "true" : async;
	type = (type==null || type=="" || typeof(type)=="undefined")? "post" : type;
	dataType = (dataType==null || dataType=="" || typeof(dataType)=="undefined")? "json" : dataType;
	data = (data==null || data=="" || typeof(data)=="undefined")? {"date": new Date().getTime()} : data;
	$.ajax({
	type: type,
	async: async,
	data: data,
	url: url,
	dataType: dataType,
	contentType:contentType,
	success: function(d){
	successfn(d);
	},
	error: function(e){
	errorfn(e);
	}
	});
	};
	
});

	   

    function GetQueryString(name)
    {
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return  unescape(r[2]); return null;
    }

	
    // 判断安卓或者iOS
	var ua = navigator.userAgent.toLowerCase();
	if (/iphone|ipad|ipod/.test(ua)){
		document.getElementsByTagName("html")[0].style.fontFamily="微软雅黑";
	}else if (/android/.test(ua)){
		document.getElementsByTagName("html")[0].style.fontFamily="微软雅黑";
	}

	// tab标签切换
    function For(c,d){
        for(var i = 0; i <c.length; i++) {
            c[i].index = i;
            c[i].onclick = function(e) {
                for(var j = 0; j <d.length; j++) {
                    c[j].className="";
                    d[j].className="hide";
                }
                this.className="tapActiveLi";
                d[this.index].className ="";
            }
        }

    }
    function tab(a,b){
        var aLi = document.getElementById(a).children;
        var aDiv = document.getElementById(b).children;
        For(aLi,aDiv)
    }
    function show_time(timeStart,timeEnd){
        var time_start = new Date().getTime(); //设定当前时间
        var time_end =  new Date("2020/10/01 00:00:00").getTime(); //设定目标时间
        // 计算时间差
        var time_distance = time_end - time_start;
        // 天
        var int_day = Math.floor(time_distance/86400000)
        time_distance -= int_day * 86400000;
        // 时
        var int_hour = Math.floor(time_distance/3600000)
        time_distance -= int_hour * 3600000;
        // 分
        var int_minute = Math.floor(time_distance/60000)
        time_distance -= int_minute * 60000;
        // 秒
        var int_second = Math.floor(time_distance/1000)
        // 时分秒为单数时、前面加零
        if(int_day < 10){
            int_day = "0" + int_day;
        }
        if(int_hour < 10){
            int_hour = "0" + int_hour;
        }
        if(int_minute < 10){
            int_minute = "0" + int_minute;
        }
        if(int_second < 10){
            int_second = "0" + int_second;
        }
        // 显示时间
        $("#time_d").val(int_day);
        $("#time_h").val(int_hour);
        $("#time_m").val(int_minute);
        $("#time_s").val(int_second);
        // 设置定时器
        setTimeout("show_time()",1000);
    }