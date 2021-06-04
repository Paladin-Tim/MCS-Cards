'use strict'

$(document).ready(function () {

    $('.c-card').each(function() {
        $(this).find('.c-card__icon').attr('src', `logos/${$(this).attr('class').substr(7)}_logo.svg`);
        $(this).find('.h-hover__off').attr('src', `backgrounds/${$(this).attr('class').substr(7)}_outline.svg`);
        $(this).find('.h-hover__on').attr('src', `backgrounds/${$(this).attr('class').substr(7)}.svg`);
        roundBorders();
    })

    $(window).resize(function(){
        roundBorders();
    })

    function roundBorders() {
        $('.c-card').each(function() {
            if ($(window).width() > 1024) {
    if ($(this).position().top === 0  && $(this).position().left >= 627 ) {
    $(this).css('border-radius', '0 15px 0 0');
    /*  console.log($(this).position().left); */
    } else if ($(this).position().top >= 420 && $(this).position().left === 0) {
    $(this).css('border-radius', '0 0 0 15px');
    /* console.log($(this).position().top); */
    } else {
    $(this).css('border-radius', '0 0 0 0');
    }} else if ($(window).width() > 768 && $(window).width() < 1024) {
    if ($(this).position().top === 0  && $(this).position().left >= 380 ) {
        $(this).css('border-radius', '0 15px 0 0');
        /* console.log($(this).position().left); */
    } else if ($(this).position().top >= 870 && $(this).position().left === 0) {
        $(this).css('border-radius', '0 0 0 15px');
        /* console.log($(this).position().top);  */
    } else {
        $(this).css('border-radius', '0 0 0 0');
    } 
    } else { 
    if ($(this).position().top === 0  && $(this).position().left >= 150) {
    $(this).css('border-radius', '0 15px 0 0');
    console.log($(this).position().left); 
    } else if ($(this).position().top >= 1300 && $(this).position().left === 0) {
    $(this).css('border-radius', '0 0 0 15px');
    /* console.log($(this).position().top);  */
    } else {
    $(this).css('border-radius', '0 0 0 0');
    }}
    })
    }
});