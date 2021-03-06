const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    box3= new Box(280,50,10,10);
    box4= new Box(300,150,10,10);
    box5= new Box(340,50,10,10);
    box6= new Box(380,50,10,10);
    box7= new Box(150,50,10,10);
    box8= new Box(100,50,10,10);
    box9= new Box(280,50,10,10);
    box10= new Box(280,50,10,10);
    ground = new Ground(200,height,400,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box9.display();
    box8.display();
    box10.display();
    ground.display();
}