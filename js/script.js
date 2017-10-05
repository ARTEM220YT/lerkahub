$(document).ready(function(){
    var social = $('.social');
    $(social).fadeIn(1000).css('display', 'inline');
    
    $('body').append('<button class="btn_up btn">НАВЕРХ</button>')
    $('.btn_up').click(function(){
        $('body').animate({scrollTop: 0}, 300);
        $('html').animate({scrollTop: 0}, 300);
    });
    $(window).scroll(function(){
        if($(window).scrollTop() > 35){
            $('.btn_up').addClass('active');
        }
        else{
            $('.btn_up').removeClass('active');
        }
    });
    
    if(window.innerWidth<600)
            location.href='http://m.lerkahub.net/';
});