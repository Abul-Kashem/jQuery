
$(document).ready(function () {

  var paragraph = $('p:first');
  // console.log(paragraph.text());

  // changing paragraph content
  paragraph.text('Paragraph content text');
  // console.log(paragraph.text());

  // get content
  var second_paragraph = $('p').eq(1);
  // console.log(second_paragraph.text());
  // console.log(second_paragraph.html());

  // highlight
  $("ul li:eq(1)").css("background-color", "yellow");
  $("ul li:eq(2)").css("background-color", "yellow");
  // set content
  $('ul li:eq(0)').text('<li>Project planning and tactical direction</li>');
  $('ul li:eq(1)').html('<li>Working with and developing CMS back-ends development</li>');




});


