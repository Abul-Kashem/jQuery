$(document).ready(function () {
    $('.chaining-btn').click(function () {
        $('.green').css('background', 'yellow').slideUp(2000).slideDown(2000);
    });
});  
