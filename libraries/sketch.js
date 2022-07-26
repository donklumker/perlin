let mvr1;
let mvr2;
let mvr3;



function setup() {
  createCanvas(600, 600);
  mvr1 = new Mvr(0, 0, 0, 0.003, 220, 255, 200); //start, posx, posy, inc, clrR, clrG, clrB
  mvr2 = new Mvr(1, 50, 100, 0.003, 255, 174, 170);
  mvr3 = new Mvr(2, 100, 200, 0.003, 255, 255, 255);


}

function draw() {

  background(16, 11, 10);
  stroke(0);


  mvr1.perlin();
  mvr2.perlin();
  mvr3.perlin();


}