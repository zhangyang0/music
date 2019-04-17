//鼠标进入图片，控制图片和文字
$("footer>ul>li>a>img").mouseover(function(){
    $img=$(this);
    var url=$img.prop("src").slice(0,-4);
    $img.prop("src",`${url}1.png`)
    console.log(url);
    $img.parent().next().children().css("color","#b891c8")
})
$("footer>ul>li>a>img").mouseout(function(){
    $img=$(this);
    var url=$img.prop("src").slice(0,-5);
    $img.prop("src",`${url}.png`)
    $img.parent().next().children().css("color","#707070")
})
//鼠标进入文字，控制图片和文字
$("footer>ul>li>a>div").mouseover(function(){
    $div=$(this);
    var url=$div.parent().prev().children().prop("src").slice(0,-4);
    $div.css("color","#b891c8")
    $div.parent().prev().children().prop("src",`${url}1.png`)
})
$("footer>ul>li>a>div").mouseout(function(){
    $div=$(this);
    var url=$div.parent().prev().children().prop("src").slice(0,-5);
    $div.css("color","#707070")
    $div.parent().prev().children().prop("src",`${url}.png`)
})