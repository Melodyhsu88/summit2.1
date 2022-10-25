$(window).on("scroll",function(e){
    if($(window).scrollTop()> $('nav').height()){
        console.log($(window).scrollTop())
        $("nav").css("backgroundColor","#14213D");
        
    }else{
        $("nav").css("backgroundColor","transparent");
    }
});