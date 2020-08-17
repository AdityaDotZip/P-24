
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, box1, box2, box3, paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1 = new Box(650, 670, 150, 20);
	box2 = new Box(735, 625, 20, 100);
	box3 = new Box(565, 625, 20, 100);

	paper = new Paper(50, 100);

	ground = new Ground(400, 690, 800, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display();
  box2.display();
  box3.display();

  paper.display();

  ground.display();
  
  drawSprites();
}

function keyPressed(){
	if(keyCode == UP_ARROW){

		Matter.Body.applyForce(paper.body, paper.body.postion,{x:55, y:-85});

	}
}



