let mvr1;
let mvr2;
let mvr3;



function setup() {
  createCanvas(200, 200);
  mvr1 = new Mvr(0, 0, 0, 0.005, 0, 0, 0); //start, posx, posy, inc, clrR, clrG, clrB
  mvr2 = new Mvr(2, 20, 25, 0.003, 0, 0, 0);
  mvr3 = new Mvr(0, 40, 50, 0.004, 0, 0, 0);


}

function draw() {

  background(255);
  stroke(0);


  mvr1.perlin();
  mvr2.perlin();
  mvr3.perlin();


}