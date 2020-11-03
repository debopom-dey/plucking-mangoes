
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy,boyImg,bgImg,mangoTree,mango1,mango2,mango3,mango4,mango5,stone,slingShot
function preload()
{
boyImg	= loadImage("images/boy.png")
bgImg= loadImage("images/unnamed.jpg")
}

function setup() {
	createCanvas(1600, 800);
    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    mangoTree=new Tree(1200,400,550,800)
	mango1= new Mango(1200,300,30)
	mango2= new Mango(1000,300,30)
	mango3= new Mango(1400,300,30)
	mango4= new Mango(1100,150,30)
	mango5= new Mango(1300,200,30)
	stone= new Stone(80,600,20)
    boy = createSprite(150,700)
	boy.addImage("boyImg",boyImg)
	boy.scale=0.15
	slingShot = new Slingshot(stone.body,{x:70,y:610});
	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(bgImg);
  Engine.update(engine);
   mangoTree.display();
   mango1.display();
   mango2.display();
   mango3.display();
   mango4.display();
   mango5.display();
   stone.display();
   slingShot.display();
  drawSprites();
 
}
function mouseDragged(){
	Matter.body.setPosition(stone.body,{x:mouseX,y:mouseY})
	
	}
	function mouseReleased(){
	
	slingShot.fly();
	
	}


