
$(document).ready(function () {

  $('#click-event-fire').click(function (e) {
    console.log(e);
    alert('Event Fire!')
  })


  $('.red-box').click(function () {
    var current_opacity = $(this).css('opacity');
    $(this).fadeTo(500, current_opacity - .3);
  });


  $('.red-box').click();


});


