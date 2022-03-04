function Rope(p1, p2) {
    this.iterations = 100;
    this.p1 = p1;
    this.p2 = p2;
    this.Len = p5.Vector.dist(this.p1.pos, this.p2. pos);

    Rope.prototype.draw = function() {
        stroke(255);
        strokeWeight(3);
        line(this.p1.pos.x, this.p1.pos.y, this.p2.pos.x, this.p2.pos.y);
    }

    Rope.prototype.update = function() {

        for(let i = 0; i < this.iterations; i++) {
            let dir = p5.Vector.sub(this.p1.pos, this.p2.pos).normalize();
            let center = p5.Vector.add(this.p1.pos, this.p2.pos);
            center.div(2.0);
            

            if(!this.p1.locked) {
                this.p1.setPos(p5.Vector.add(center, p5.Vector.mult(dir, this.Len/2)));
            }
            if(!this.p2.locked) {
                this.p2.setPos(p5.Vector.sub(center, p5.Vector.mult(dir, this.Len/2)));
            }

        }

    }


}