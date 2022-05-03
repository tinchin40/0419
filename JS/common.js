// 漢堡
$(document).ready(function () {

    $('#ham').click(function () {
        $('ul').slideToggle(300);
    })

    $('nav li:first-child').click(function () {
        // console.log('sss');
        $('nav li:first-child ol').slideToggle(300);
    })



    

})