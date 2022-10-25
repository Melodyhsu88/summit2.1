$(window).on("scroll",function(e){
    if($(window).scrollTop()> $('nav').height()){
        $("nav").css("backgroundColor","#14213D");
        
    }else{
        $("nav").css("backgroundColor","transparent");
    }
});