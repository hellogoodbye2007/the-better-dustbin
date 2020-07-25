var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world, engine;
var dustbinp1,dustbinp2,dustbinp3;
var paper1,ground1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	Engine.run(engine);
	dustbinp1=new dustbin(700,650,150,10);
	dustbinp2=new Ground(630,640,10,100);
	dustbinp3=new Ground(770,640,10,100);
	paper1=new Paper(200,689,50);
	ground1=new Ground(width/2,height,width,20);
}


function draw() {
  background(255);
  ground1.display();
  paper1.display();

  dustbinp1.display();
  //dustbinp2.display();
  //dustbinp3.display();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:100,y:-150});
	}
}