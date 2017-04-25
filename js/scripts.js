$(function() {


// $("h1").click(function() {
//   alert("This is a header.");
// });

  $(".color-control").click(function() {
    $("#color-showing").toggle();
    $("#color-hidden").toggle();
  });

  $(".flower").click(function() {
    $("#flower-fade-in").slideUp();
    $("#flower-fade-out").slideDown();

  });

  $(".flower-control").click(function() {
    $("#flower-fade-in").slideDown();
    $("#flower-fade-out").slideUp();

  });


});
