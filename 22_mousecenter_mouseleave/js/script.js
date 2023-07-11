
$(document).ready(function () {

  $('.red-box').mouseenter(function () {
    $(this).stop().fadeTo(500, .5);
  });

  $('.red-box').mouseleave(function () {
    $(this).stop().fadeTo(500, 1);
  });

  // above code and below code functionality is the same
  $('.red-box').hover(function () {
    $(this).stop().fadeTo(500, .5);
  }, function () {
    $(this).stop().fadeTo(500, 1);
  });

});


