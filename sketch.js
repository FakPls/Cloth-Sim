let par1, par2, par3;
let r1, r2;
let g;

function setup() {
  createCanvas(windowWidth, windowHeight);
  g = createVector(0, 0.1);


  par2 = new Particle(width/2, height/2);
  par3 = new Particle(width/2 + 150, height/2, true);
  par1 = new Particle(width/2 - 150, height/2, true);
  r1 = new Rope(par1, par2);
  r2 = new Rope(par2, par3);
  
  
}

function draw() {
  background(103, 202, 235);

  r1.draw();
  r1.update();

  r2.draw();
  r2.update();

  par1.draw();
  par1.update();

  par2.draw();
  par2.update();
  par2.applyForce(g);

  par3.draw();
  par3.update();

  
}
