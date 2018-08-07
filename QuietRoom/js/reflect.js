var q1r = [];
var q2r = [];
var q3r = [];
var array = ["hello", "goodbye", "no"];
var $word = $('<div>');
var $body = $('<body>');
var $button = $('<a>');
$button.addClass("btn");
$button.addClass("pill");
$button.append("Back");
var q1input  = document.getElementById("q1");
var q2input  = document.getElementById("q2");
var q3input = document.getElementById("q3");

var messageBox  = document.getElementById("display");
function insert () {
 q1r.push( q1input.value );
 q2r.push( q2input.value );
 q3r.push( q3input.value );

 clearAndShow();

}

function clearAndShow () {
  // Clear our fields
$('form').html(
  q1input.value = "",
  q2input.value = "",
  q3input.value = "",

  // Show our output
  messageBox.innerHTML = "",

  messageBox.innerHTML += "You are feeling... " + "<span style='color:#FFA500'>" + q1r.join(", ") + "<br/>" + "</span>",
  messageBox.innerHTML += "You feel this way because.. " +  "<span style='color:#FFA500'>"+ q2r.join(", ") + "<br/>" + "</span>",
  messageBox.innerHTML += "You think it's rational/irrational... " +  "<span style='color:#FFA500'>" + q3r.join(", ") + "</span>",

);
}
$('#submit').one('click', function () {
  insert();
  $('form').append($button);
  $button.attr('href', "reflect.html");
});
