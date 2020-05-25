// JavaScript Document
$(function(){
    function animation() {
        $('.fadeInUp').each(function () {
            //ターゲットの位置を取得
            let target = $(this).offset().top;
            //スクロール量を取得
            let scroll = $(window).scrollTop();
            //ウィンドウの高さを取得
            let windowHeight = $(window).height();
            //ターゲットまでスクロールするとフェードインする
            if (scroll > target - windowHeight) {
                $(this).css('opacity', '1');
                $(this).css('transform', 'translate(0)');
            }
        });
    }
    animation();

    $(window).scroll(function(){
    animation();
    });
});


$('.close-button, .open-button').on("click",function(){
    $('.header nav').slideToggle();
});


/*** 上に戻るボタン ***/
let topBtn = $('#scroll-top');
topBtn.hide();

// ある程度スクロールされたら、上に戻るボタンを表示する
$(window).scroll(function () {
    console.log($(this).scrollTop());
    console.log($(this).height());

    if ($(this).scrollTop() > 1000) {
        topBtn.fadeIn(); // フェードインで表示
    } else {
        topBtn.fadeOut(); // フェードアウトで非表示
    }
});

topBtn.on("click", function (event) {
    event.preventDefault();  // ページ内リンクの挙動をキャンセル
    $('body,html').animate({ // スムーズにスクロールする設定
        scrollTop: 0
    }, 500);
});

$('#slick-slide').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false
});