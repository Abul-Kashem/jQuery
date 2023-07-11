
$(document).ready(function () {

  $('#click-event-fire').hover(function (e) {
    console.log(e);
    alert('Hover event fire!')
  })


  $('.red-box').hover(function () {
    var current_opacity = $(this).css('opacity');
    $(this).fadeTo(500, current_opacity - .3);
  });

});


