function Particle(x, y, locked) {
    this.pos = createVector(x, y);
    this.prevPos = this.pos;
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.locked = locked;

    Particle.prototype.draw = function() {
        noStroke();
        fill(255);
        circle(this.pos.x, this.pos.y ,30);
    }

    Particle.prototype.update = function() {
        if(!this.locked) {
            this.pos.add(this.vel);
            this.vel.add(this.acc);
            this.acc.mult(0);
        }
    }

    Particle.prototype.applyForce = function(force) {
        this.acc.add(force);
    }

    Particle.prototype.setPos = function(newPos) {
        this.pos = newPos;
    }
}