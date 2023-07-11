
$(document).ready(function () {

  $('html').on('click keydown', function () {
    console.log('mouse was clicked or key was pressed');
  });

  var images = [
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg"
  ];

  var i = 0;
  $('.gallery').find('img').on('click', function () {
    i = (i + 1) % images.length;
    $(this).fadeOut(function () {
      $(this).attr("src", images[i]).fadeIn();
    });

  });

});


