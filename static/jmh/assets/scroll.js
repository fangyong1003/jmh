var topValue = 0, // 上次滚动条到顶部的距离
    interval = null; // 定时器
document.onscroll = function() {
    $(".leftbar").addClass('small');
    if(interval == null) {
        // 未发起时，启动定时器，1秒1执行
        interval = setInterval(function() {
            if(document.documentElement.scrollTop == topValue) {
                $(".leftbar").removeClass('small');
                clearInterval(interval);
                interval = null;
            }
        }, 1000);
    }
    topValue = document.documentElement.scrollTop;
}
window.onscroll=function(){
　　var t =document.documentElement.scrollTop||document.body.scrollTop; //变量t就是滚动条滚动时，到顶部的距离
　　var left =$(".m-head-nav");
  if( t >=600) {     //当拖动到距离顶部100px处时，左边导航固定，不随滚动条滚动
     　　left.addClass("floatbar");
　　}else{
      left.removeClass("floatbar");
}}

$(document).ready(function(){
var h = document.documentElement.clientWidth;
$(".leftbar").css("top",h/4+"px");
});
