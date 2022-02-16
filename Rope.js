function Rope(p1, p2) {
    this.Len = 150;
    this.iterations = 10;
    Rope.prototype.draw = function() {
        stroke(255);
        strokeWeight(3);
        line(p1.pos.x, p1.pos.y, p2.pos.x, p2.pos.y);
    }

    Rope.prototype.update = function() {

        for(let i = 0; i < this.iterations; i++) {
            let dir = p5.Vector.sub(p1.pos, p2.pos).normalize();
            let center = p5.Vector.add(p1.pos, p2.pos);
            center.div(2);

            if(!p1.locked) {
                p1.setPos(p5.Vector.add(center, p5.Vector.mult(dir, this.Len/2)));
            }
            if(!p2.locked) {
                p2.setPos(p5.Vector.sub(center, p5.Vector.mult(dir, this.Len/2)));
            }
        }

        
    }


}