function Particle(x, y, locked) {
    this.pos = createVector(x, y);
    this.prevPos = this.pos;
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.locked = locked;

    Particle.prototype.draw = function() {
        noStroke();
        if(this.locked) {
            fill(255, 0, 0);
        }
        else{
            fill(255);
        }
        //fill(255);
        circle(this.pos.x, this.pos.y ,30);
    }

    Particle.prototype.update = function() {
        if(!this.locked) {
            // this.pos.add(this.vel);
            // this.vel.add(this.acc);
            // this.acc.set(0, 0);
            
            let posBeforeUpdate = this.pos;
            this.pos.add(p5.Vector.sub(this.pos, this.prevPos));
            this.pos.add(this.acc)
            this.prevPos = posBeforeUpdate;
            this.acc.mult(0)
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