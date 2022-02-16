function Rope(p1, p2) {
    this.maxLen = 150;
    this.dir;
    this.distance = p5.Vector.dist(p1.pos, p2.pos);
    
    Rope.prototype.draw = function() {
        stroke(255);
        strokeWeight(3);
        line(p1.pos.x, p1.pos.y, p2.pos.x, p2.pos.y);
        // line(p2.pos.x, p2.pos.y, this.dir.x+p2.pos.x, this.dir.y+p2.pos.y);
        // line(p1.pos.x, p1.pos.y, -this.dir.x+p1.pos.x, -this.dir.y+p1.pos.y);

    }

    Rope.prototype.update = function() {
        this.dir = p5.Vector.sub(p1.pos, p2.pos).mult(0.01/this.distance);
        this.negDir = this.dir.copy().mult(-1);

        if(this.distance > this.maxLen) {
            p1.applyForce(this.negDir);
            p2.applyForce(this.dir);
        }

        this.dir.set(0,0);
        
    }


}