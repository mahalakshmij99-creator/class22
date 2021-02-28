const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine, world;
var ground,ball;

function setup() {
  createCanvas(400,400);

  engine= Engine.create();
  world=engine.world;

  var groundOps= {
    isStatic: true
  }


  ground= Bodies.rectangle(200,380,400,20,groundOps);
  World.add(world,ground);



  ball= Bodies.circle(200,50,20,{restitution : 1})
  World.add(world,ball);

  console.log(ground);
  
}

function draw() {
  background(0);  

  Engine.update(engine);

  fill ("aqua")
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20);


  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  
}