$(function () {
    let divWidth = $('.value-container').width()
    let imgCount = $('.company-value-slider li').length

    for(let i = 0; i < imgCount; i++){
        $('#contentButton').append(`<li></li>`)
    }
    $('#contentButton li:nth-child(1)').addClass('clicked')

    $('.company-value-slider li').width(divWidth)
    $('.company-value-slider').width(divWidth * imgCount)

    let index = 0
    let timer = setInterval(moveToTheNext, 3000)

    $('#contentButton li').click(function(){
        clearInterval(timer)
        index = $(this).index()

        $('.company-value-slider').animate({
            left: divWidth * index * -1,
        })

        $(this).addClass('clicked')
        $('#contentButton li').not(this).removeClass('clicked')

        timer = setInterval(moveToTheNext, 3000)
    })

    function moveToTheNext(){
        if(index < imgCount - 1){
            index++
        }else{
            index = 0
        }

        $('.company-value-slider').animate({
            left: divWidth * index * -1,
        })

        $(`#contentButton li:eq(${index})`).addClass('clicked')
        $(`#contentButton li`).not(`:eq(${index})`).removeClass('clicked')
    }
});
