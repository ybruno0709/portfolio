'use strict';

$(() => {
    const projects = $('.project-single');
    const bulletsContainer = $('.bullets');
    const arrow = $('.arrow');
    let bullets;

    let actualIndex = 0;
    let maxIndex = projects.length;

    initSlider();

    function initSlider() {
        for (let i = 0; i < maxIndex; i++) {
            if (i == 0) {
                bulletsContainer.append(`<span class="active"></span>`);
            } else {
                bulletsContainer.append(`<span></span>`);
            }

            bullets = $('.bullets span');
        }

        projects.hide();
        projects.eq(0).fadeIn();
        bullets.eq(0).addClass('active');

        bulletClick();
        arrowClick();
    }

    function bulletClick() {
        bullets.click(function () {
            projects.eq(actualIndex).fadeOut();
            actualIndex = $(this).index();
            projects.eq(actualIndex).fadeIn();

            bullets.removeClass('active');
            $(this).addClass('active');
        });
    }

    function arrowClick() {
        arrow.click(function () {
            projects.eq(actualIndex).fadeOut();

            if ($(this).is('#prev')) {
                actualIndex--;
            } else if ($(this).is('#next')) {
                actualIndex++;
            }

            if (actualIndex == maxIndex) {
                actualIndex = 0;
            } else if (actualIndex < 0) {
                actualIndex = maxIndex - 1;
            }

            projects.eq(actualIndex).fadeIn();

            bullets.removeClass('active');
            bullets.eq(actualIndex).addClass('active');
        });
    }
});
