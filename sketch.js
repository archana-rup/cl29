const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var engine, world;
var box1, box2,box3,box4,box5,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var blocks1,blocks2,blocks3,blocks4,blocks5,blocks6,blocks7,blocks8,blocks9,blocks10,blocks11,blocks12,blocks13,blocks14,blocks15,blocks16;
var stand1, stand2;
var ground,ball, sling,Img;
var backgroundImg;

function preload(){
    Img = loadImage("polygon.png");

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20)
    stand1= new Stand(390,300,250,10)
    stand2= new Stand(720,200,250,10)
    getTime();
    


    //level 1
    box1 = new Box(300,275,30,40);
    box2 = new Box(330,275,30,40);
    box3 = new Box(360,275,30,40);
    box4 = new Box(390,275,30,40); 
    box5 = new Box(420,275,30,40);
    box6 = new Box(450,275,30,40);
    box7 = new Box(480,275,30,40);
    box8 = new Box(330,235,30,40);
    box9 = new Box(360,235,30,40);
    box10 = new Box(390,235,30,40);
    box11= new Box(420,235,30,40);
    box12= new Box(450,235,30,40);
    box13= new Box(360,195,30,40);
    box14= new Box(390,195,30,40);
    box15 = new Box(420,195,30,40);
    box16= new Box(390,155,30,40);
    

    blocks1=new Box(640,175,30,40);
    blocks2=new Box(670,175,30,40);
    blocks3=new Box(700,175,30,40);
    blocks4=new Box(730,175,30,40);
    blocks5=new Box(760,175,30,40);
    blocks6=new Box(790,175,30,40);
    blocks7=new Box(820,175,30,40);
    blocks8=new Box(670,135,30,40);
    blocks9=new Box(700,135,30,40);
    blocks10=new Box(730,135,30,40);
    blocks11=new Box(760,135,30,40);
    blocks12=new Box(790,135,30,40);
    blocks13=new Box(730,135,30,40);
    blocks14=new Box(700,95,30,40);
    blocks15=new Box(730,95,30,40);
    blocks16=new Box(760,95,30,40);
    blocks17=new Box(730,55,30,40);

    strokeWeight(2);
     stroke(15);
     

    
    
    
    
    
   


    ball= Bodies.circle(50,200,20);
    World.add(world,ball);

    sling= new Slingshot(this.ball,{x:100,y:200});


    
    
}

function draw(){
    if(backgroundImg){
        background(backgroundImg);

    }

    else{
        background(0);

    }
    

    
    strokeWeight(2);
    stroke(15);
    fill("skyblue");

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    fill("pink");
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    fill("red");
    box13.display();
    box14.display();
    box15.display();

    fill("white");
    box16.display();

    fill("lavender");
    blocks1.display();
    blocks2.display();
    blocks3.display();
    blocks4.display();
    blocks5.display();
    blocks6.display();
    blocks7.display();

    fill("green");
    blocks8.display();
    blocks9.display();
    blocks10.display();
    blocks11.display();
    blocks12.display();

    fill("yellow");
    blocks13.display();
    blocks14.display();
    blocks15.display();

    fill("red");
    blocks16.display();
    blocks17.display();

    Engine.update(engine);

    imageMode(CENTER);
    image(Img,ball.position.x,ball.position.y,40,40);

    stand1.display();
    stand2.display();
    sling.display();
    console.log(ball.position);

    ground.display();
}

function mouseReleased(){
    sling.fly();
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

async function getTime(){
    var response= await fetch("https://worldtimeapi.org/api/timezone/Europe/London");
    var responseJSON= await response.json();
    var dateTime= responseJSON.datetime;
    var hour= dateTime.slice(11,13);

    if(hour>=06 && hour<=15){
        bg="yellow";
    }
    else{bg="blue"};
    backgroundImg=bg;

}

