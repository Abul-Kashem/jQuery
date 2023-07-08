
$(document).ready(function () {

  $('ul ul:first').append('<li>New item add at the last element using jQuery append method</li>');


  var thirdItem = $('ul li').filter(function (index) {
    return index != 3 == 0;
  });
  thirdItem.css('background', '#FBC21C');

  $('<li>Another way item at the last item using jQuery append method</li>').appendTo('ul ul:first');

  var fourthItem = $('ul li').filter(function (index) {
    return index != 4 == 0;
  });
  fourthItem.css('background', '#F64444');

  $('.red-box').after('<div class="red-box">After Red Box Add</div>');
  $('.blue-box').before('<div class="blue-box">Before Blue Box Add</div>');


});


