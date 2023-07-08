
$(document).ready(function () {

  var link = $('#link');
  console.log(link.attr('href'));
  console.log(link.attr('title'));

  link.attr('href', "http://www.w3school.com");


  var radioButton = $("input[type=radio]:first");
  console.log(radioButton.prop("checked"));
  console.log(radioButton.attr("checked"));

  $("input[type=text]").val("Abul Kashem");
  $("input[type=email]").val("kashem@gmail.com");
  $("input[type=range]").val(9);

});


