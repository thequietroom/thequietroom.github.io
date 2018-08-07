//var startGame = document.getElementById('start');
var score = 0;
var $body = $('body');
var $svg = $('svg');
var maxDiam = 50;
var seconds_left = 15;

function getRandomColor() {
    var colours = ["#00c0f1", "#add036", "#ec2426", "#ffc116","#ff00ff"];
    return colours[Math.floor(Math.random() * 5)]
}

function getRandomWord() {
    var colours = ["restless", "agony", "anxiety", "fear","alone","failure"];
    return colours[Math.floor(Math.random() * 4)]
}


  $('a').one('click', function () {
////TIMER
        var interval = setInterval(function() {
        $('#timer').html(--seconds_left);

        if (seconds_left <= 0) {
          $('#timer').html("GAME OVER");
          clearInterval(interval);
        }
      }, 1000);
      //var $countdown = $('<circle>');
      //$countdown.addClass('circle-animate');
      //$svg.append($countdown).delay(0);


///generate bubbles
        /*  var $bubble;
          for(var i =0; i<5; i++){
          var d = Math.floor(Math.random() * maxDiam)+50;
          $bubble = $('<div>');
          $bubble.addClass('bubble');
          $bubble.css({
            width:d,
            height:d,
            'top': Math.random() * ((document.documentElement.clientHeight/2)+90)+200,
            'left': Math.random() * ((document.documentElement.clientWidth/2)+90)+300,
            backgroundColor: getRandomColor()
          });

          $bubblep = $('<p>');
          $bubblep.append(getRandomWord());

          $bubblep.addClass("bubblep");

          $bubble.append($bubblep).delay(1500);

          $body.append($bubble).delay(1500);
        }*/
//https://codepen.io/EmmaRobbo88/pen/PWzJma
//https://jsfiddle.net/Luf3hxfh/17/
      setTimeout(function run() {
          var $bubble;
          if(seconds_left <= 0){
            alert("Game Over. Try Again?");
              location.reload();
          }


          for(var i =0; i<5; i++){

              var d = Math.floor(Math.random() * maxDiam)+80;
              $bubble = $('<div>');
              $bubble.addClass('bubble');
              $bubble.css({
                width:d,
                height:d,
                'top': Math.random() * ((document.documentElement.clientHeight/2)+100)+250,
                'left': Math.random() * ((document.documentElement.clientWidth/2)+100)+300,
                backgroundColor: getRandomColor()
              });

              $bubblep = $('<p>');
              $bubblep.append(getRandomWord());

              $bubblep.addClass("bubblep");

              $bubble.append($bubblep).delay(0);

              $body.append($bubble).delay(0);
              }
            setTimeout(run,3200);
          }, 0);

          $body.on('click', '.bubble', '.bubblep',function () {
            $(this).addClass('is-popping');
            score++;
            $('#score').html(score);
          });

          $body.on('transitionend', '.bubble', function () {
            $(this).remove();
          });
  });
