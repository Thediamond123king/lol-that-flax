const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;




var engine, world;
var box1,box2,box3,box4,box5;
var box6,box7,box8,box9;
var platform;
var birdbox, slingShot;



function setup(){
    var canvas = createCanvas(1200,400);
   
    
    engine = Engine.create();

    world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(330,235,30,40);
    box2 = new Box(360,235,30,40);
    
    box3 = new Box(390,235,30,40);
    box4 = new Box(420,235,30,40);
    
    box5 = new Box(450,235,30,40)
    box6 = new Box(360,195,30,40);
 
    box7 = new Box(390,195,30,40)
    box8 = new Box(420,195,30,40);
    
    box9 = new Box(390,155,30,40);

    birdbox = new Bird(200,50,30,40);

    
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(0);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    

    box3.display();
    box4.display();
    

    box5.display();
    box6.display();
    box7.display();

    box8.display();
    box9.display();
    

    birdbox.display();
    platform.display();
    
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(birdbox.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}