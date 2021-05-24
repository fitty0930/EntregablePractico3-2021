$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    $('.layer1').css({
        width:(100+scroll/5)+'%'
    })
    $('.layer2').css({
        width:(100+scroll/5)+'%',
        left: scroll/50+'%'
    })
})