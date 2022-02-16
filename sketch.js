let par1;
let par2;
let r1;
let g;

function setup() {
  createCanvas(windowWidth, windowHeight);
  g = createVector(0, 0.5);


  par1 = new Particle(width/2, height/2);
  par2 = new Particle(width/2 + 151, height/2);
  r1 = new Rope(par1, par2);
  
}

function draw() {
  background(103, 202, 235);

  r1.draw();
  r1.update();

  par1.draw();
  //par1.update();

  par2.draw();
  par2.update();

}
