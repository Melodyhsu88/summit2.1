$(window).on("scroll",function(event){
    if($(window).scrollTop() > $('.banner-pic').height()){
        $('.category').addClass('touch');
        $('.category').css("backgroundColor", "rgba(255, 255, 255, .6)");
        
    }else{
        $(".category").css("backgroundColor","transparent");
    }
});

