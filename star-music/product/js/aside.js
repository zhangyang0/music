$("ul>li.users").mouseover(function(){
    var $user=$(this);
    $user.find("ul>li>a").css("color","#b891c8")
})
$("ul>li.users").mouseout(function(){
    $("li.users>ul>li:first-child>a").css("color","#fff")
    $("li.users>ul>li:last-child>a").css("color","#f8f9fa")
})

//nav
$("nav>ul>li").mouseover(function(){
    $(this).children(":first-child").css("display","block")
})
.mouseout(function(){
    $(this).children(":first-child").css("display","none")
})