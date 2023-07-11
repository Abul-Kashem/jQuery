
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
  var galleryImg = $('.gallery').find('img');
  galleryImg.on('click', function () {
    switchToNextImage();
  });

  function switchToNextImage() {
    i = (i + 1) % images.length;
    galleryImg.fadeOut(function () {
      galleryImg.attr("src", images[i]).fadeIn();
    });
  };



});


