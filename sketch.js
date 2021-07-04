var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var side1
var side2
var side3

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	side1=createSprite(width/2, 650, 200, 20)
	side1.shapeColor=color(255)

	side2=createSprite(310, 620, 20, 100)
	side2.shapeColor=color(255)

	side3=createSprite(490, 620, 20, 100)
	side3.shapeColor=color(255)
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.12

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	side1 = Bodies.rectangle(width/2, 650, 200, 20 , {isStatic:true} );
 	World.add(world, side1);

	side2 = Bodies.rectangle(310, 620, 20, 100 , {isStatic:true} );
 	World.add(world, side2);

	side3 = Bodies.rectangle(490, 620, 20, 100 , {isStatic:true} );
	World.add(world, side3);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false)


 }
}



