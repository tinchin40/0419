$(document).ready(function () {
    $('.qa_up').click(function () {
        $(this).parent().find('.qa_down').slideToggle(300);
        $(this).parent().siblings().find('.qa_down').slideUp(300)
    })
    
});
