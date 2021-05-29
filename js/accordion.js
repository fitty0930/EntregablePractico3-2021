$(".accordion_header").click(function() {
    $(".accordion_header").removeClass("active");
    $(this).toggleClass("active");
});