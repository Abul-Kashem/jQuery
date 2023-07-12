
$(document).ready(function () {

  $("#checkbox").change(function () {
    var isChecked = $(this).is(":checked");  // or .prop("checked")

    if (isChecked) {
      // Add the checkbox' label to the selection and highlight both in green.
      $(this).add("label[for='checkbox']").css("box-shadow", "0 0 4px #181");
    } else {
      $(this).add("label[for='checkbox']").css("box-shadow", "0 0 4px #811");
    }
  });

  $("#country").change(function () {
    var chosen = $(this).find(":selected").text();
    alert(chosen);
  });


});


