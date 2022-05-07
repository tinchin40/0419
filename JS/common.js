// 漢堡
$(document).ready(function () {

    $('.hamburger').click(function () {
        $('ul').slideToggle(300);
        $('button').toggleClass('is-active');
    })

    

    $('nav li:first-child').click(function () {
        // console.log('sss');
        $('nav li:first-child ol').slideToggle(300);
    })



    

})
