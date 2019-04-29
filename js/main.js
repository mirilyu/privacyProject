// https://www.binpress.com/create-full-page-scrolling-website-fullpage-js/

$(document).ready(function () {
    var options = {};

    //$('#fullpage').fullpage();

    $('#main-carousel').slick({
        rtl: true,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1,
        mobileFirst: true,
        centerPadding: '50px',
        responsive: [
            {
                breakpoint: 992,
                settings: "unslick"
            }
        ]
    });

    var questionsForm = $("#questions-form");
    var q1 = questionsForm.find("#customSwitch1");
    var q2 = questionsForm.find("#customSwitch2");
    var q3 = questionsForm.find("#customSwitch3");
    var q4 = questionsForm.find("#customSwitch4");

    $('#answers-modal').on('hidden.bs.modal', function (e) {
        q1.prop('checked', true);
        q2.prop('checked', true);
        q3.prop('checked', true);
        q4.prop('checked', false);
    })
});
