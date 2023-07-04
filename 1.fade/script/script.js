$(document).ready(function () {
    $('.red-btn').click(function () {
        $('.red').fadeIn();
    });
});

$(document).ready(function () {
    $('.green-btn').click(function () {
        $('.green').fadeOut();
    });
});


$(document).ready(function () {
    $('.blue-btn').click(function () {
        $('.blue').fadeToggle();
    });
});

$(document).ready(function () {
    $('.aqua-btn').click(function () {
        $('.aqua').fadeTo('slow', 0.10);
    });
});