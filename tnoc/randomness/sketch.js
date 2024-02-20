class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }

  show() {
    stroke(0);
    strokeWeight(3);
    point(this.x, this.y);
  }

  stepBasic() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  }

  stepTowardsMouse() {
    let r = random(1)
    if (r < 0.5) {
      mouseX > this.x ? this.x++ : this.x--;
      mouseY > this.y ? this.y++ : this.y--;
    } else if (r < 0.6) {
      this.x--;
    } else if (r < 0.7) {
      this.y++;
    } else if (r < 0.8) {
      this.x++;
    } else {
      this.y--;
    }
  }

  stepTowardsRight() {
    let r = random(1);
    if (r < 0.4) {
      this.x++;
    } else if (r < 0.6) {
      this.x--;
    } else if (r < 0.8) {
      this.y++;
    } else {
      this.y--;
    }
  }

  stepGaussian() {
    this.x += randomGaussian(0, -1);
    this.y += randomGaussian(0, 1);
  }
}

function paintSplatter() {
  let x = randomGaussian(width/2, 100);
  let y = randomGaussian(height/2, 100);
  let rgb = Array.from({length: 3}, () => randomGaussian(200, 100))

  noStroke();
  fill(rgb);
  circle(x, y, random(40));
}

let walker;

function setup() {
  createCanvas(windowWidth, windowHeight);
  walker = new Walker();
  background(255);
}

function draw() {
  walker.stepGaussian();
  walker.show();
  
  //paintSplatter();
}
