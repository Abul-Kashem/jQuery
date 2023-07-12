$(document).ready(function () {
  // Open lightbox on image click
  $('.lightbox-link').click(function (e) {
    e.preventDefault();
    var imageUrl = $(this).attr('href');
    $('#lightbox-image').attr('src', imageUrl);
    $('#lightbox-overlay, #lightbox-container').fadeIn();
  });

  // Close lightbox on overlay click
  $('#lightbox-overlay, #close-button').click(function () {
    $('#lightbox-overlay, #lightbox-container').fadeOut();
  });
});
