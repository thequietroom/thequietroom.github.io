var seconds_left = 3;

var interval = setInterval(function() {
$('#timer').html(--seconds_left);

if (seconds_left <=0 ) {
  clearInterval(interval);
}
}, 1000);
