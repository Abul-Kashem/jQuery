
$(document).ready(function () {

  $('#list').children('li').filter(':even').css('background', '#007ACC');

  var everyThirdItem = $('li li').filter(function (index) {
    return index % 3 == 0;
  });
  everyThirdItem.css('background', '#FBC21C');

  $('li').first().css('background', '#299B48');
  $('li').last().css('background', '#DB4134');

  var fifthElement = $('li').eq(4);
  fifthElement.css('background', '#793A79');



});


