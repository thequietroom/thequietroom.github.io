//Initialize and load
window.onload = function(){
    //Get the canvas
    can = document.getElementById("can");
    ctx = can.getContext("2d")

    //Get the width of the window to make canvas fullscreen
    screen_width = window.innerWidth;
    screen_height = window.innerHeight;

    //Actually resize canvas element
    can.width = screen_width;
    can.height = screen_height;

    //start gameloop
    lastFrame = new Date().getTime();
    //This will call a function next time the browser is ready to render
    window.requestAnimationFrame(Step);

    //initialize boulders
    boulders = new Array();
    boulders[0] = new boulder(getRandomInt(20, 40), 5);

    boulder_speed = 30;
}

function Step(){
    //Calculate deltatime (time since last frame)
    var tm = new Date().getTime();
    dt = (tm - lastFrame) / 1000;
    if(dt > 1/15) { dt = 1/15; }
    lastFrame = tm;

    //clear canvas from previous frame
    ctx.clearRect(0, 0, screen_width, screen_height);

    //step and render each boulder
    for(var i=0; i<boulders.length; i++){
        boulders[i].update();
        //check if boulder is outside screen
        if(boulders[i].y-boulders[i].size>screen_height)
            boulders.splice(i, 1);
    }

    //spawn new boulders
    if(getRandomInt(0, 40) == 4){
        boulder_speed ++;
        boulders.push(new boulder(boulder_speed, getRandomInt(5, 30)));
    }

    window.requestAnimationFrame(Step);
}

function boulder(speed, size){
    this.x = getRandomInt(0, screen_width);
    this.y = 0;

    this.size = size;

    this.speed = speed;

    this.update = function(){
        //update y position, multiply by delta time to make speed in
        //pixels per second, and framerate independent
        this.y += this.speed * dt;
        ctx.globalAlpha = 0.5;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI*2, false);
        //ctx.fillStyle = getRandomColor();
        ctx.fill();
    }

}

//Helper functions
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomNum(min, max) {
	return Math.random() * (max - min + 1) + min;
}

function lengthdir_x(length, direction){
  return length*Math.cos(toRad*direction);
}

function lengthdir_y(length, direction){
  //Invert output to match down is up canvas coordinates

  return -(length*Math.sin(toRad*direction));
}

function point_direction(x1, y1, x2, y2){
  result = Math.atan2(-(y2-y1),x2-x1)*toDegree;
  if(result<0){
	  result = 360+result;
  }
  return result;
}

function point_distance(x1,y1,x2,y2){
  return Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
}

function getRandomColor() {
    var colours = ["#123b7c", "##061630", "#98aed1", "#bfd7ff","#688dc9"];
    return colours[Math.floor(Math.random() * 5)]
}
