const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bat,ball,stump1,stump2;
var ground,slingshot;
var batImage,ballImage,stumpsImage1,stumpImage2;

var score = 0;

function preload()
{
ballImage=loadImage("ball.png");
batImage=loadImage("bat.png");
stumpImage1=loadImage("stumps.jpg");
stumpImage2=loadImage("stumps.jpg");
bg=loadImage("bg.png");
}

function setup() {
 var canvas= createCanvas(1000,400);

  engine = Engine.create();
  world = engine.world;

  ground=new Ground(600,400,1200,20);
  bat=new Bat(250,350,60,100,0);
  ball=new Ball(800,200,20);
  stump1=new Stumps(30,350,80,100);
  stump2=new Stumps(900,350,80,100);
  
//string=new String(bat.body,{x:250,y:250})
}

function draw() {
 Engine.update(engine)
 background(bg)
 ground.display();
bat.display();
ball.display();
stump1.display();
stump2.display();

}

function mouseDragged(){
  Matter.Body.setPosition(bat.body,{x:mouseX,y:mouseY})
}
function keyPressed(){
  if(keyCode===32){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:-2.3,y:-2.3})
   
  }
}

