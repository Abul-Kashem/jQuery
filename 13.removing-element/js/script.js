
$(document).ready(function () {

  $('h2:first').replaceWith('<h2>WordPress / Happiness Engineer</h2>');

  $('p:last').replaceWith(function () {
    return '<p>Please read the advertisement carefully!!</p>';
  });

  $('p:last').remove();

  var detached = $('p:first').detach();
  detached.css('background', "#FED700");

  $('#list').after(detached);

  $('form').empty();

});


