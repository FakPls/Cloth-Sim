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
            this.edges();
            this.pos.add(this.vel);
            this.vel.add(this.acc);
            this.acc.set(0, 0);
            
            
        }
    }

    Particle.prototype.applyForce = function(force) {
        this.acc.add(force);
    }

    Particle.prototype.setPos = function(newPos) {
        for(let i = 0; i < 100; i++) {
        this.pos = newPos;
        }
    }

    Particle.prototype.edges = function() {
        if(this.pos.y > height) {
            this.pos.y = height;
        }
    }
}