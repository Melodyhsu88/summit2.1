window.addEventListener("load", function(){

    let rowWidth = $('.product-card').width() + 15
    // console.log(rowWidth)
    let curIndex = 0;

        
    //-----------------------------------------btnLeft.onclick
    $("#btnLeft").click(function(){
        curIndex--;
        $('.product-item-row').css("transform","translateX("+rowWidth*curIndex+"px)")

        document.getElementById("btnRight").disabled = false;

        if(curIndex == -6){
            document.getElementById("btnLeft").disabled = true;
        }
    })
    //-----------------------------------------btnRight.onclick
    $("#btnRight").click(function(){
        curIndex++;
        $('.product-item-row').css("transform","translateX("+rowWidth*curIndex+"px)");

        document.getElementById("btnLeft").disabled = false;
        if(curIndex == 0){
            document.getElementById("btnRight").disabled = true;
        }
    })
    document.getElementById()

    });

