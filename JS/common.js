// 漢堡
$(document).ready(function () {

    $('.hamburger').click(function () { //漢堡按鈕觸發下拉選單
        
        $('.nav_ul').slideToggle(300); //下拉選單
        
        $('button').toggleClass('is-active'); //增加漢堡動畫
    })

    

    $('nav li:first-child').click(function () {
        // console.log('sss');
        $('nav li:first-child ol').slideToggle(300); //下拉子選單
    })



    

})
