
$(".content").mouseover(function(){ 
    $(this).find(".shad,.ima,.add,.heart").css("display","block") 
})
.mouseout(function(){ 
    $(this).find(".shad,.ima,.add,.heart").css("display","none") 
})


function vali($img,url1,url2){
    var i=$img.attr("alt");
    if(i==1)
        $img.attr({
            src:url1,
            alt:2
        })
    else
        $img.attr({
            src:url2,
            alt:1
        })
}
$(".heart").click(function(){
    vali($(this),"images/red_heart1.png","images/red_heart.png");
    
})
$(".ima").click(function(){
    vali($(this),"images/play_btn.png","images/stop_btn.png"); 
})

//刷新按钮
var c=1;
$("#refresh").click(function(){
    $(this).css("transform",`rotate(${360*c}deg)`);
    c++;
})