
$(document).ready(function () {

  $('a').addClass('fancy-link');

  $('p:first').addClass('large emphasize');

  $('li li').addClass(function (index) {
    $(this).addClass('item-' + index);
  });

  $('div').addClass(function (index, currentClass) {
    console.log(currentClass);

    if (currentClass.indexOf('dummy') !== -1) {
      return 'red-box';
    }

  });

  // chaining
  $('.red-box').removeClass('red-box').addClass('green-box');

  // toggle 
  $('li li:first').toggleClass('emphasize');






});


