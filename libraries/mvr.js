class Mvr {
    constructor(start, posx, posy, inc, clrR, clrG, clrB) {
        this.inc = inc;
        this.start = start;
        this.posx = posx;
        this.posy = posy;
        this.clrR = clrR;
        this.clrG = clrG;
        this.clrB = clrB;
        

    }

    perlin() {

        
        push();
        stroke (this.clrR,this.clrG, this.clrB);
        
        translate (this.posx, this.posy);
        strokeWeight(0.1);

        noFill();
        beginShape();
        this.xoff = this.start;
        for (this.x = 35; this.x < width - 190; this.x++) {

            this.y = noise(this.xoff) * height/3;
            vertex(this.x, this.y);


            //vertex(x - 30, y + 40);
            vertex(this.x + 50, this.y + 200);


            this.xoff += this.inc;


        }
        endShape();
        pop();


        this.start += this.inc;
    }

}