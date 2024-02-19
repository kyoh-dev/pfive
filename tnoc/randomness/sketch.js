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
}

let walker;

function setup() {
  createCanvas(windowWidth, windowHeight);
  walker = new Walker();
  background(255);
}

function draw() {
  walker.stepTowardsMouse();
  walker.show();
}
