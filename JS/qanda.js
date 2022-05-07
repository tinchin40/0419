// 下拉QA選單
$(document).ready(function () {
    $('.qa_up').click(function () {
        $(this).parent().find('.qa_down').slideToggle(200);
        $(this).parent().siblings().find('.qa_down').slideUp(200)
    })

    // AOS的套件開關
    AOS.init({
        once: false,

    });


});



