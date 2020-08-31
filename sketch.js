const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var player, goal, ball, goalKeeper, goalImg;

function preload(){
  goalImg = loadImage("GoalImg2.png")
}

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  player = createSprite(400,600,40,40);
  ball = new Ball(400,550,20);
  goal = Bodies.rectangle(width/2, 100, 50, 50);
  World.add(world,goal);
  goalKeeper = createSprite(400, 200, 25, 25);
  
}

function draw() {
  background("black");  
  drawSprites();
  ball.display();
  imageMode(CENTER)
  image(goalImg,goal.position.x,goal.position.y,width/2,200);
}