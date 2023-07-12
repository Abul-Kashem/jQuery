
$(document).ready(function () {

  var inputFields = $('input:text, input:password, textarea');

  inputFields.focus(function () {
    $(this).css('box-shadow', '0 0 4px red');
  });

  var emailField = $('#email');
  emailField.focus(function () {
    $(this).css('box-shadow', '0 0 4px red');
  })

  inputFields.blur(function () {
    $(this).css('box-shadow', 'none');
  });

  emailField.blur(function () {
    $(this).css('box-shadow', 'none');
  });


});


