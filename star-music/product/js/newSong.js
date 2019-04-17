document.getElementById("content1").style.zIndex="10";
var navs=document.querySelectorAll("[data-toggle=sgnav]");
for(var sgnav of navs){
    sgnav.onclick=function(){
        var sgnav=this;
        var divs=document.querySelectorAll("#container>div");
        for(var div of divs){
            div.style.zIndex="";
        }
        var id=sgnav.getAttribute("data-target");
        var div=document.querySelector(id);
        div.style.zIndex=10;
    }
}

$(".nsg>a").mouseover(function(){
    $(this).find(".ns_play").css("display","block");
})
.mouseout(function(){
    $(this).find(".ns_play").css("display","none");
})