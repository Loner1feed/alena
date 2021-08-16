

$('.mainSlider__wrap').slick({
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    // centerMode: true,
    // variableWidth: true,
    nextArrow: '<a href="javascript://" class="arrow arrow__next"><img src="./img/arrow-1.png" alt=""></a>',
    prevArrow: '<a href="javascript://" class="arrow arrow__prev"><img src="./img/arrow-1.png" alt=""></a>',
    responsive: [
        {
            breakpoint: 900,
            settings: {
                appendArrows: $('.mainSlider__arrows')
            }
        }
    ]
})


$('.aboutBlock__slider').slick({
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    
})

$('.language__heading').click(() => {

    $(document).click((e) => {
        let switcher = $('.language');
        if(!switcher.is(e.target) && switcher.has(e.target).length === 0){
            $('.language__body').removeClass('language__body--open')
        }
    })
    
    $('.language__body').addClass('language__body--open')
})