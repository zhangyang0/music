$(".mask>a").click(function(){
    var $record=$(".sl_record>img");
    if(!$record.hasClass(".sl_rotate")){
        $record.addClass("sl_rotate");
        $record.removeClass("sl_rotate_none");
    }else{
        $record.removeClass("sl_rotate");
        $record.addClass("sl_rotate_none");
    }  
})
