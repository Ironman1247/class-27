class Sling{

    constructor(bodyA,bodyB){

        var options={

            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.04,
            length : 20,
        }

        this.sling=Matter.Constraint.create(options);
        World.add(world,this.sling)
    }

    display(){

        var pA = this.sling.bodyA.position
        var pB=  this.sling.bodyB.position
        push();
        stroke("black")
        strokeWeight(4)
        line(pA.x,pA.y,pB.x,pB.y)
        pop();

    }

}