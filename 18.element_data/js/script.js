
$(document).ready(function () {

  var gallery = $('.gallery');
  console.log(gallery);

  var images = [
    'images/img1.jpg',
    'images/img2.jpg',
    'images/img3.jpg',
    'images/img4.jpg',
  ];

  gallery.data('availableImg', images);

  console.log(gallery.data('availableImg'));


  gallery.data("name", "The Amazing Gallery");
  console.log(gallery.data("name"));  // The Amazing Gallery




});


