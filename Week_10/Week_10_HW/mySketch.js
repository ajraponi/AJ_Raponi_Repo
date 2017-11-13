var x, y;
var currentangle = 270;
var step = 50;
var angle = 45;
var r = 50;
var g = 50;
var b = 50;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  stroke(0, 0, 0, 255);

  x = width/2;
  y = height/2;
}

function draw() {
  var radius = 20;

  if (keyIsPressed === true) {
    r = random(255);
    g = random(255);
    b = random(255);
  }
  fill(r,g,b)
  ellipse(x, y, radius, radius);
  if (x > width) {
    x = 0
  }
  if (x < 0) {
    x = width
  }
  if (y > height) {
    y = 1
  }
  if (y < 0) {
    y = height
  }
}

function keyPressed() {
  if(keyCode== UP_ARROW) {
    var x1 = x + step*cos(radians(currentangle));
    var y1 = y + step*sin(radians(currentangle));
    line(x, y, x1, y1);
    x = x1;
    y = y1;
  }
  else if(keyCode == RIGHT_ARROW) {
   currentangle+=angle;
   var x1 = x + step*cos(radians(currentangle));
   var y1 = y + step*sin(radians(currentangle));
   line(x, y, x1, y1);
   x = x1;
   y = y1;
  }
  else if(keyCode == LEFT_ARROW) {
   currentangle-=angle; // turn left
   var x1 = x + step*cos(radians(currentangle));
   var y1 = y + step*sin(radians(currentangle));
   line(x, y, x1, y1);
   x = x1;
   y = y1;
  }
  else if(keyCode == DOWN_ARROW) {
   var x1 = x - step*cos(radians(currentangle));
   var y1 = y - step*sin(radians(currentangle));
   line(x, y, x1, y1);
   x = x1;
   y = y1;
  }
  else if(keyCode == ENTER) {
   var x1 = width/2;
   var y1 = height/2;
   line( x1, y1);
   x = x1;
   y = y1;
   currentangle = 270
  }
  else if(keyCode == SHIFT) {
    angle += 45
    if (angle > 90) {
      angle = 45
    }
  }
  else if(keyCode == BACKSPACE) {
    clear()
    var x1 = width/2;
 	var y1 = height/2;
 	line( x1, y1);
 	x = x1;
 	y = y1;
 	currentangle = 270
  }
}
