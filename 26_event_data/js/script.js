
$(document).ready(function () {

  $('#btn-event-data').click({
    name: "John Doe",
    message: "you are beautiful"
  }, function (event) {
    $(".result").html(`Hey ${event.data.name}, ${event.data.message}`);
  })


});


