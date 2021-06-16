
const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine, world, box, ground, ball

function setup(){
  var canvas=createCanvas(400,400);
  engine=Engine.create()
  world=engine.world
  box=Bodies.rectangle(100,100,50,50)
  World.add(world,box)
  //creating a ground
  var go={
isStatic:true
  }
  ground=Bodies.rectangle(200,350,400,10,go)
  World.add(world,ground)
  //creating a ball
  var c={
    restitution:1.2
  }
  ball=Bodies.circle(200,200,20,c)
  World.add(world,ball)
}
function draw()
{
  background(0);
  Engine.update(engine)
  rectMode(CENTER);
  rect(box.position.x,box.position.y,50,50);
  rect(ground.position.x,ground.position.y,400,10)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
}