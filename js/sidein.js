let oth = $(window).innerHeight();
$(function(){
    $(window).scroll(function(){
      let sct = $(this).scrollTop();
      let all = sct+oth;
      $(".slideIn").each(function(){
        let sld = $(this).offset().top;
        if(all >sld){
            $(this).addClass("active");
        }
      });
    });
})