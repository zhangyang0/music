$(function () {
    var i=0;
    var j;
    function rotate(){
        if(i>4){
            i=0;
            j=md1;md1=md2;md2=j;
        }else{
            i++;
        }
        var md1=-19*i;
        var md2=95.2-19*i;
        $(".md_1").css("left",`${md1}rem`);
        $(".md_2").css("left",`${md2}rem`);
    }
    var timer=setInterval(rotate,3000);

    //$(".outBox")
    //.mouseover(function(){
    //    clearInterval(timer);
    //})
})