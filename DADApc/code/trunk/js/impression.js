/**
 * Created by Administrator on 2017/5/23.
 */

$(document).ready(function () {
    $(".function_cl").hover(function () {
        var img = $(this).find(">img").attr("src").split("_");
        var path = img[1];
        $(this).children("img").attr("src","../images/impression/selected_" + path + "");
        $(this).css("background-color","#fbe6ed");
        var lang=$(this).attr("lang");
        $(".function_m img").attr("src","../images/impression/"+ lang +".png");
    },function () {
        var img = $(this).find(">img").attr("src").split("_");
        var path = img[1];
        $(this).children("img").attr("src","../images/impression/default_" + path + "");
        $(this).css("background-color","#fafafa");
    });

});