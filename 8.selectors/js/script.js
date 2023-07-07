$(function () {

  // NOTE: Some of the selectors below overlap. To see the exact effect of one
  // of them, please comment out all others.

  // To select elements in jQuery, you can simply use any CSS selector inside
  // the $() function by passing it in as a string.

  // Select all paragraph tags
  var p = $("p");
  highlight(p);

  // Select all elements with the class .red-box (only one in this case)
  var redBoxes = $(".red-box").css("background-color", "red");
  // highlight(redBoxes);

  // Select the unique element with ID "list"
  var list = $("#list").css("background-color", "blueviolet");
  // highlight(list);

  // Select all h2, p, and input tags
  var elements = $("h2, p, input").css("background-color", "yellowgreen");
  // highlight(elements);

  // Select only the last <li> on the page
  var lastItem = $("li:last").css("background-color", "coral");
  // highlight(lastItem);

  // Select all even list items on the page (every second list item)
  var everySecondItem = $("li:even").css("background-color", "#34495e");
  // highlight(everySecondItem);

  // Select all odd list items (every other list item)
  var everyOtherItem = $("li:odd");
  // highlight(everyOtherItem);

  // Select all input elements that are checked/selected
  // Checkboxes and radio buttons don't have background-color
  var selected = $("input:checked");
  // console.log(selected.length);

  // Select all input elements of type email
  var emails = $("input[type=email]");
  // highlight(emails);

});

// Helper function which highlights the given element with yellow background
function highlight(element) {
  element.css("background-color", "red");
}
