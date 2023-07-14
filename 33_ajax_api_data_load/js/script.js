$(document).ready(function () {
  // $.ajax({
  //   url: 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?',
  //   dataType: "jsonp",
  //   method: 'GET',
  //   responseType: 'blob', // Set the response type to blob
  //   success: function (response) {
  //     var imageUrl = URL.createObjectURL(response);

  //     // Set the image source to the URL
  //     $('#loadedImage').attr('src', imageUrl);

  //     // Clean up the object URL after use
  //     URL.revokeObjectURL(imageUrl);
  //   },
  //   error: function (jqXHR, textStatus, errorThrown) {
  //     console.log('Error loading image:', errorThrown);
  //   }
  // });

  var apiUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';

  $.getJSON(apiUrl, {
    format: "json"
  }).done(function (data) {
    // load data
    console.log(data);

    var galleryContainer = $('#galleryContainer');
    galleryContainer.empty();


    $.each(data.items, function (index, item) {
      console.log(item);

      var imageDiv = $('<div>').addClass('image');
      var imageElement = $('<img>').attr('src', item.media.m);

      // image item add to image gallery section
      // $('<img>').attr('src', item.media.m).appendTo('#imageContainer');

      imageDiv.append(imageElement);
      galleryContainer.append(imageDiv);

      // stop after 10 images
      // if (index === 10) {
      //   return false;
      // }
    })
  }).fail(function (response) {
    console.log(response);
    alert('AJAX Call Failed!');
  });
});
