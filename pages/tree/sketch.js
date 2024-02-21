class Tree {
  constructor() {
    this.x = width/2;
    this.y = height - 20;
  }

  show() {
    stroke(0);
    strokeWeight(15);
    point(this.x, this.y);
  }

  branch() {
    const trunkHeight = height - 150;

    if (this.y >= trunkHeight) {
      this.y -= 0.5;
    }


      // { 
      //   translate(0, -height/10); // move the space upwards
      //   rotate(random(-0.05, 0.05));  // random wiggle
  
      //   if (random(1.0) < 0.6) { // branching   
      //     rotate(0.3); // rotate to the right
      //     scale(0.8); // scale down
          
      //     push(); // now save the transform state
      //     branch(depth + 1); // start a new branch!
      //     pop(); // go back to saved state
          
      //     rotate(-0.6); // rotate back to the left 
          
      //     push(); // save state
      //     branch(depth + 1);   // start a second new branch 
      //     pop(); // back to saved state        
      //   } else { // no branch - continue at the same depth  
      //     branch(depth);
      //   }
      // }
  }
}

let tree;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  tree = new Tree();
}

function draw() {
  tree.show();
  tree.branch();
}
