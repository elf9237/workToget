// 侧边栏高度自适应屏幕
var a=$('#page-wrapper').height();
$('.sidebar').height(a+65);

$(window).resize(function(){  
    $(".sidebar").height(a+65);  
}) 

