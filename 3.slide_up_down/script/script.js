$(document).ready(function () {

    $(".down-btn").click(function () {
        $(".show-img").slideDown('slow', function () {
            $(".show-text").text('Slide Down Transition Complete');
        });
    });

    $(".up-btn").click(function () {
        $(".show-img").slideUp('slow', function () {
            $(".show-text").text('Slide Up Transition Complete');
        });
    });

});
