'use strict';

$(() => {
    const descriptionEl = $('section#home .content p');
    const description = descriptionEl.html();
    const cursor = $('.cursor');




    let i = 0;

    setTimeout(() => {
        typing();
        checkBlinkStart();
    }, 1000);

    descriptionEl.html('');

    function typing() {
        cursor.css('opacity', 1);

        if (i < description.length) {
            descriptionEl.html(descriptionEl.html() + description.charAt(i));
            i++;
            console.log(i);
        }

        setTimeout(typing, 150);
    };

    function blinking() {
        cursor.css("visibility", "hidden");

        setInterval(function () {
            cursor.css("visibility", (cursor.css("visibility") === "hidden") ? "visible" : "hidden");
        }, 1000);
    };

    function checkBlinkStart() {
        const typeEnd = ((description.length + 7) * 150);
        setTimeout(blinking, typeEnd);
    }
});
