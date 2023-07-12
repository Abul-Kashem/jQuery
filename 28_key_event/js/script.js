$(document).ready(function () {
  // Initial position of the box
  var positionX = 50;
  var positionY = 50;

  // Move the box function
  function moveBox() {
    $('#box').css({
      top: positionY + '%',
      left: positionX + '%'
    });
  }

  // Keydown event listener
  $(document).keydown(function (event) {
    switch (event.which) {
      case 37: // Left arrow key
        console.log('Left arrow key');
        if (positionX > 0) {
          positionX -= 10;
          moveBox();
        }
        break;
      case 38: // Up arrow key
        console.log('Up arrow key');
        if (positionY > 0) {
          positionY -= 10;
          moveBox();
        }
        break;
      case 39: // Right arrow key
        console.log('Right arrow key');
        if (positionX < 100) {
          positionX += 10;
          moveBox();
        }
        break;
      case 40: // Down arrow key
        console.log('Down arrow key');
        if (positionY < 100) {
          positionY += 10;
          moveBox();
        }
        break;
      default:
        break;
    }
  });
});
