let elForm = document.querySelector('.header__form')
let elSearch = document.querySelector('.header__search')
let elSlider = document.querySelector('.slider__won')
let sliderBtn = document.querySelectorAll('.slider__btn')

elSearch.addEventListener('click', function () {
    elForm.classList.toggle('form__active')
})

$(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });
});


