let g;
let points = [];
let ropes = [];
let numPoints = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  g = createVector(0, 1);

  for(let i = 0; i < numPoints; i++) {
    points.push(new Particle(i*width/numPoints, height/2, true));
  }

  for(let i = 0; i < points.length-1; i++) {
    ropes.push(new Rope(points[i], points[i+1]));
  }

  //points[points.length-1].locked = true
  
}

function draw() {
  background(103, 202, 235);
  for(let p of points) {
    p.draw()
    p.update();
  }
  for(let r of ropes) {
    r.draw()
    r.update();
  }

  points[0].pos.x = mouseX;
  points[0].pos.y = mouseY;

}

function mousePressed() {
  points.push(new Particle(width/2, height/2));
  ropes.push(new Rope(points[points.length-2], points[points.length-1]));
}
