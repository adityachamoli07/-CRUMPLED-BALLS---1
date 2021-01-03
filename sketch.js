
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paper1,groundSprite,ground,bottomBody,leftSprite,rightSprite;
function preload()
{

}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
   
   paper1= new paper(150,350,50,50);

   groundSprite=createSprite(width/2, height-50, width,10);

  

   ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
   World.add(world, ground);

   bottomSprite=createSprite(730,634,200,20);
   leftSprite=createSprite(620,594,20,100);
   rightSprite=createSprite(840,594,20,100);

   bottomSprite.shapeColor=color("red")
	rightSprite.shapeColor=color("red")
	leftSprite.shapeColor=color("red")
	
	bottomBody = Bodies.rectangle(730,634,200,20, {isStatic:true});
  World.add(world, bottomBody);
  
  rightBody = Bodies.rectangle(840,594,20,100 ,{isStatic:true});
  World.add(world, rightBody);
  
  leftBody = Bodies.rectangle(620,594,20,100 ,{isStatic:true});
	World.add(world, leftBody);

  var render = Render.create({
    element: document.body,
    engine: engine,
    options: { width: 1200, height: 700, wireframes: false }
    });
    





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();

  bottomSprite.x=bottomBody.position.x
  bottomSprite.y=bottomBody.position.y

  rightSprite.x=rightBody.position.x
  rightSprite.y=rightBody.position.y

  leftSprite.x=leftBody.position.x
  leftSprite.y=leftBody.position.y
  
  
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:100,y:-100})	
	 }
   }
   
   



