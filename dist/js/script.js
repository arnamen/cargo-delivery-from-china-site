$(document).ready(function(){
    $('.reviews_carousel').slick({
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        adaptiveHeight: false,
        prevArrow: $('.reviews__prev'),
        nextArrow: $('.reviews__next')
    });
  });

  window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.hamburger_menu'),
    menuItem = document.querySelectorAll('.hamburger__link'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('hamburger_menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('hamburger_menu_active');
        })
    })
})

$(function(){
    $("a[href^='#']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    });
});