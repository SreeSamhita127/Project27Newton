
const Engine     = Matter.Engine;
const World      = Matter.World;
const Bodies     = Matter.Bodies;
const Body       = Matter.Body;
const Constraint = Matter.Constraint

var Bob1, Bob2, Bob3, Bob4, Bob5;
var hold;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(500, 500);
	
	engine = Engine.create();
	world = engine.world;

    Bob1 = new Bob(150,350,25);
    Bob2 = new Bob(200,350,25);
	Bob3 = new Bob(250,350,25);
	Bob4 = new Bob(300,350,25);
	Bob5 = new Bob(350,350,25);
    
	hold = new roof(250,100,300,10); 

	rope1 = new Chain(Bob1.body,hold.body,-100,0);
	rope2 = new Chain(Bob2.body,hold.body,-50,0);
	rope3 = new Chain(Bob3.body,hold.body,0,0);
	rope4 = new Chain(Bob4.body,hold.body,50,0);
	rope5 = new Chain(Bob5.body,hold.body,100,0); 
 	
  
}


function draw() {
  Engine.update(engine);
  background(225,182,193);
  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  hold.display();

  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW){
   
		Matter.Body.applyForce(Bob1.body,Bob1.position, {x: -30, y: -30});
		
	}
}


function mouseDragged(){

  Matter.Body.setPosition(Bob1.body,{ x: mouseX, y: mouseY });

}

