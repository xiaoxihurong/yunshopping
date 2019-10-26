$(function() {

    //顶部导航
    var index;
    $(".nav-uu li").on("mouseenter", function() {
        $(this).addClass("nav-mouse").siblings().removeClass("nav-mouse");
    });
    $(".nav-uu li").on("click", function() {
        index=$(this).index();
    });

    $(".nav-uu").on("mouseleave", function() {
        $(this).children().removeClass("nav-mouse");
        $(this).children("li:eq("+index+")").addClass("nav-mouse");
    });

    //底部导航
    $(".bottom-uu li").on('click',function(){
        $(this).addClass('bottom-black').siblings().removeClass('bottom-black');
    });




    //轮播图    
    var count = 0;
    var timeId;
    timeId = setInterval(clickHandle, 2000);
    $(".arrow-right").click(function() {
        count++;
        if (count == $(".slider li").length) {
            count = 0;
        }
        $(".slider li").eq(count).fadeIn().siblings("li").fadeOut();
    });

    $(".arrow-left").click(function() {
        count--;

        if (count == -1) {
            count = $(".slider li").length - 1;
        }
        $(".slider li").eq(count).fadeIn().siblings("li").fadeOut();
    });
    $(".slider").on('mouseenter',function(){
        $(".arrow").css("display","block");
        clearInterval(timeId);
    }).on('mouseleave',function(){
        $(".arrow").css("display","none");
        timeId = setInterval(clickHandle, 2000);
    })   
    function clickHandle() {
        count++;
        if (count == $(".slider li").length) {
            count = 0;
        }
        $(".slider li").eq(count).fadeIn().siblings("li").fadeOut();
    };

});