let x = 100;
let y = 100;
let xspeed = 2.5;
let yspeed = 2;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  background(255);

  x = x + xspeed;
  y = y + yspeed;


  if (x > width || x < 0) {
    xspeed = xspeed * -1;
  }
  if (y > height || y < 0) {
    yspeed = yspeed * -1;
  }


  stroke(0);
  fill(127);
  circle(x, y, 48);
}