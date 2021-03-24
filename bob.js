class Bob {
    constructor(x,y,radius){
        var Boboptions={
            isStatic: false,
            restitution: 1.5,
            friction: 0,
            density:1
        }
        this.x = x;
        this.y = y;
        this.radius = radius;

        this.body = Bodies.circle(this.x,this.y,this.radius,Boboptions);
        World.add(world,this.body);
    }
    display(){

        push ();
        translate(this.body.position.x,this.body.position.y);
        rotate (this.body.angle);
        fill ("blue");

        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop ();

    }
};