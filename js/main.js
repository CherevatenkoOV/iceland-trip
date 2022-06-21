$(document).ready(() => {

    'use strict'

    //подключаем библиотеку wow.js
    new WOW({
        animateClass: 'animate__animated'
    }).init();


    // Запуск видео по клику на ссылку
    let playVideo = document.getElementById('play-video'),
        videoIsland = document.getElementById('video-iframe'),
        videoIframe = videoIsland.querySelector('iframe'),
        videoHrefContainer = document.getElementById('video-section-container-image');

    playVideo.onclick = (() => {
        videoIsland.style.display = "block";
        videoHrefContainer.style.display = "none";
        videoIframe.setAttribute('src', `${videoIframe.src + '?autoplay=1'}`)
        console.log(videoIframe);
    });

    // Карусель: программы 
    $('.tour-programs').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button class="button-prev-program wow animate__animated animate__fadeInRight animate__delay-1s"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 476.213 476.213" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><polygon xmlns="http://www.w3.org/2000/svg" points="476.213,223.107 57.427,223.107 151.82,128.713 130.607,107.5 0,238.106 130.607,368.714 151.82,347.5   57.427,253.107 476.213,253.107 " data-original="#000000" class=""></polygon></g></svg></button>',
        nextArrow: '<button class="button-next-program wow animate__animated animate__fadeInRight animate__delay-1s"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 476.213 476.213" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><polygon xmlns="http://www.w3.org/2000/svg" points="345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5   345.606,368.713 476.213,238.106 " data-original="#000000" class=""></polygon></g></svg></button>'
    });

    // Карусель: отзывы
    $('.reviews-box').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        infinite: false,
        prevArrow: '<button class="button-prev-reviews"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns: xlink = "http://www.w3.org/1999/xlink" xmlns: svgjs = "http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 476.213 476.213" style="enable-background:new 0 0 512 512" xml: space = "preserve" class= ""><g><polygon xmlns="http://www.w3.org/2000/svg" points="476.213,223.107 57.427,223.107 151.82,128.713 130.607,107.5 0,238.106 130.607,368.714 151.82,347.5   57.427,253.107 476.213,253.107 " data-original="#000000" class=""></polygon></g></svg></button> ',
        nextArrow: '<button class="button-next-reviews"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 476.213 476.213" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><polygon xmlns="http://www.w3.org/2000/svg" points="345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5   345.606,368.713 476.213,238.106 " data-original="#000000" class=""></polygon></g></svg></button>'
    });

    // Карусель: галерея
    $('.gallery-sections').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: '<button class="button-prev-gallery"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 6.3499999 6.3500002" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><g xmlns="http://www.w3.org/2000/svg" id="layer1" transform="translate(0 -290.65)"><path id="path9509" d="m4.0896849 292.23437a.26460982.26460982 0 0 0 -.1617472.0667l-1.8536336 1.5875a.26460982.26460982 0 0 0 0 .40256l1.8536336 1.58595a.26460982.26460982 0 1 0 .3436483-.40049l-1.6190225-1.38648 1.6190225-1.38699a.26460982.26460982 0 0 0 -.1819011-.46871z" font-variant-ligatures="normal" font-variant-position="normal" font-variant-caps="normal" font-variant-numeric="normal" font-variant-alternates="normal" font-feature-settings="normal" text-indent="0" text-align="start" text-decoration-line="none" text-decoration-style="solid" text-decoration-color="rgb(0,0,0)" text-transform="none" text-orientation="mixed" white-space="normal" shape-padding="0" isolation="auto" mix-blend-mode="normal" solid-color="rgb(0,0,0)" solid-opacity="1" vector-effect="none" data-original="#000000" class=""></path></g></g></svg></button>',
        nextArrow: '<button class="button-next-gallery"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 6.3499999 6.3500002" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><g xmlns="http://www.w3.org/2000/svg" id="layer1" transform="translate(0 -290.65)"><path id="path9429" d="m2.2580394 291.96502a.26460982.26460982 0 0 0 -.1741496.46871l1.6190225 1.38699-1.6190225 1.38648a.26460982.26460982 0 1 0 .3436483.40049l1.8536335-1.58595a.26460982.26460982 0 0 0 0-.40256l-1.8536335-1.5875a.26460982.26460982 0 0 0 -.1694987-.0667z" font-variant-ligatures="normal" font-variant-position="normal" font-variant-caps="normal" font-variant-numeric="normal" font-variant-alternates="normal" font-feature-settings="normal" text-indent="0" text-align="start" text-decoration-line="none" text-decoration-style="solid" text-decoration-color="rgb(0,0,0)" text-transform="none" text-orientation="mixed" white-space="normal" shape-padding="0" isolation="auto" mix-blend-mode="normal" solid-color="rgb(0,0,0)" solid-opacity="1" vector-effect="none" data-original="#000000" class=""></path></g></g></svg></button>'
    });

    $('.test-popup-link').magnificPopup({
        type: 'image'
    });

    let burgerMenu = document.getElementById('burger-menu');
    let headerItemCollection = document.querySelectorAll('#burger-menu-items > *');


    document.getElementById('burger').onclick = () => {
        burgerMenu.classList.add('show');
        burgerMenu.classList.remove('hide');
    };

    document.getElementById('close').onclick = () => {
        burgerMenu.classList.add('hide');
        burgerMenu.classList.remove('show');
    };

    headerItemCollection.forEach((item) => {
        item.addEventListener('click', function () {
            burgerMenu.classList.remove('show');
            burgerMenu.classList.add('hide');
        })
    });

});


