class Chain {
     constructor(body1, body2, offsetX, offsetY) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;

         var Chainoptions ={
             bodyA:body1,
             bodyB:body2,
             pointB:{x:this.offsetX, y:this.offsetY}
         }
        
        this.chain = Constraint.create(Chainoptions);
        World.add(world,this.chain);
        
     
        }

    display(){

        push()

        strokeWeight (2);      
        fill(225);

        var Anchor1X = this.chain.bodyA.position.x;
        var Anchor1Y = this.chain.bodyA.position.y;

        var Anchor2X = this.chain.bodyB.position.x + this.offsetX
        var Anchor2Y = this.chain.bodyB.position.y + this.offsetY

        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);

        pop ()
        
    }   
};