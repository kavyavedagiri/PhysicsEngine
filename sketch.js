const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
 
var engine,world,box1,box2,ground,pig1,log1;
var box3,box4,pig3,log3;
function setup()
{
    var canvas=createCanvas(400,400);  //(400,400);
    engine=Engine.create();
    world=engine.world;
    
    ground=new Ground(200,390,400,20);
    box1=new Box(200,300,50,50);
    //box2=new Box(100,50,50,50);
    box2=new Box(240,100,50,50);
    pig1=new Pig(200,200);
    log1=new Log(100,300,100,PI/2);
    
    /*ground=new Ground(600,height,1200,20);
    box1=new Box(700,320,70,70);
    box2=new Box(920,320,70,70);
    pig1=new Pig(810,350);
    log1=new Log(810,260,300,Math.PI);

    box3=new Box(700,240,70,70);
    box4=new Box(920,240,70,70);
    pig3=new Pig(810,220);

    log3= new Log(810,180,300,180*Math.PI/180); */
}

function draw(){   
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

  /*  box3.display();
    box4.display();
    pig3.display();
    log3.display();*/
 }