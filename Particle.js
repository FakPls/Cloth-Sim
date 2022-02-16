function Particle(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);

    Particle.prototype.draw = function() {
        noStroke();
        fill(255);
        circle(this.pos.x, this.pos.y ,30);
    }

    Particle.prototype.update = function() {
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        this.acc.set(0, 0);
    }

    Particle.prototype.applyForce = function(force) {
        this.acc.add(force);
    }
}