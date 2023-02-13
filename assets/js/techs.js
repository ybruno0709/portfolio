$(() => {
    const cubes = $('.cube');
    const technology = $('#tech-text');
    let current = 0;

    const colors = ["#e44d26", "#3492cb", "#ead41c", "#0863a2"];
    const technologies = ["HTML 5", "CSS 3", "JavaScript", "jQuery"];

    animation();

    let delay = setInterval(() => {
        animation();
        checkCurrent();
    }, 1250);

    cubes.each(i => {
        $(cubes[i]).click(() => {
            current = i;
            $(cubes[i]).addClass('active');

            cubes.removeClass('active');

            animation();
            clearInterval(delay);;
        });

    });

    function checkCurrent() {
        if (current < cubes.length - 1) {
            current++;
        } else {
            current = 0;
        }
    }

    function changeActiveCube() {
        cubes.each(i => {
            if ($(cubes[i]).attr('id').split('-')[1] * 1 === current) {
                $(cubes[i]).addClass('active');
            } else {
                $(cubes[i]).removeClass('active');
            }
        });
    }

    function textTransform() {
        technology.html(technologies[current]);
        technology.css('color', colors[current]);
    }

    function animation() {
        changeActiveCube();
        textTransform();
    }
});