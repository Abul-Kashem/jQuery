$(document).ready(function () {
  $('ul img').on({
    mouseover: function () {
      $(this).css({
        'opacity': 1,
      });
    },
    mouseout: function () {
      $(this).css({
        'opacity': 0.4
      });
    },
    click: function () {
      var imageURL = $(this).attr('src');
      $('#mainImg').fadeOut(500, function () {
        $(this).attr('src', imageURL);
      }).fadeIn(500);
    }
  });
});
