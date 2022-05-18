"use strict";

var elForm = document.querySelector('.header__form');
var elSearch = document.querySelector('.header__search');
var elSlider = document.querySelector('.slider__won');
var sliderBtn = document.querySelectorAll('.slider__btn');
elSearch.addEventListener('click', function () {
  elForm.classList.toggle('form__active');
});
$(document).ready(function () {
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000
  });
});