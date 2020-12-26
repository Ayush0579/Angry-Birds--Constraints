class Constraints{
    constructor(a,b){
        var options = {
            bodyA : a,
            bodyB : b,
            stiffness : 0.05,
            length : 5
        }

        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }

    display(){
        var pos = this.chain.bodyA.position
        var posB = this.chain.bodyB.position
        stroke("brown");
        strokeWeight(5);
        line(pos.x,pos.y,posB.x,posB.y);
    }
}