$(document).ready(function () {
  // Load content from a URL and insert it into the "content" div

  $("#code").load("js/script.js");


  $('#code').load('example.html', function (response, status, xhr) {
    if (status === 'success') {
      console.log('Content loaded successfully');
    } else if (status === 'error') {
      console.log('Error loading content');
    }
  });
});
