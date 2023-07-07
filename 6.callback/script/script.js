$(document).ready(function () {
    $('.callback-btn').click(function () {
        $('.green').css('background', 'yellow').slideUp(2000).slideDown(2000, function () {
            alert('After slide up and down callback function alert method working.')
        });
    });
});  
