
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var myWorld, myEngine;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	myEngine = Engine.create();
	myWorld = myEngine.world;

	ground = new Ground(600,height,1200,10);
	paper=new Paper(200,500,50);
  box1=new Dustbin(900,680,200,20);
	//box2=new Dustbin(1000,700,20,200);
	//box3=new Dustbin(800,600,20,200);

	Engine.run(myEngine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground.display();
  paper.display();
  box1.display();
  //box2.display();
 // box3.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
	Body.applyForce(paper.body,paper.body.position,{x:100,y:-100})
	}
}


