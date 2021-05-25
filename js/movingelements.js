$(window).scroll(function() {
    const AVIONXINICIAL = -400;
    const NIEVE1YINICIAL = 250;

    if (AVIONXINICIAL + ($(window).scrollTop() * 1.2) < 4700) {
        $(".elem-plane").css({
            "left": AVIONXINICIAL + ($(window).scrollTop() * 1.4) + "px"
        });
    }
    if ($(window).scrollTop() < 1700) {
        $(".elem-snow").css({
            "top": NIEVE1YINICIAL + ($(window).scrollTop() * 1.3) + "px"
        });
    }
});