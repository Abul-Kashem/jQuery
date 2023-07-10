
$(document).ready(function () {

  // p tag text display none
  $('p:first').css('display', 'none');

  // showing css properties value
  var redBox = $('.red-box');
  console.log(redBox.width());
  console.log(redBox.css('width'));

  // change css properties value
  redBox.css('background-color', 'marine');
  redBox.css('width', '+=20px');
  console.log('Width: ' + redBox.css('width'));
  redBox.css('height', '-=20px');
  console.log('Height: ' + redBox.css('height'));

  // get multiple values
  var properties = $("p").css(["font-size", "line-height", "color"]);
  console.log(properties['font-size']);

  // set multiple values
  $('.red-box').css({
    'opacity': '1',
    'width': '50px',
    'height': '50px',
    'background-color': '#f48035'
  });

  console.log('Width: ' + redBox.css('width'));






});


