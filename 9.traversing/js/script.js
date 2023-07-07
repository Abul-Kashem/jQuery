
$(document).ready(function () {

  $('#list').find('li').css('background', 'gray');
  $('#list').children('li').css('background', 'cyan');
  $('#list').parents('body').css('background', 'yellow');
  $('#list').parent().css('background', 'green');
  $('#list').siblings(':header').css('background', 'red');
  $('#list').prev().css('background', '#632263');
  $('#list').next().css('background', '#3988C2')

});


