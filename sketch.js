var d1,d2,d3,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,height,800,10,opt)
	paper = new Paper(30,680,40);
	d1 = new Dustbin(400,680,200,20)
	d2 = new Dustbin(300,680,20,100)
	d3 = new Dustbin(500,680,20,100)
   var opt={
	 isStatic:true
 }
	/*ground = Bodies.rectangle(400, height, 800, 10, opt);
 	World.add(world, ground);*/
	
	
}


function draw() {
  background(255);
  Engine.update(engine)
  paper.display();
  ground.display();
  d1.display()
  d2.display();
  d3.display();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:85});
	}
}

