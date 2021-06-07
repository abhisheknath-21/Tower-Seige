const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var backgroundImg;


function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

   ground1 = new Ground(590, 380, 300, 20);
   ground2 = new Ground(600, 490, 1200, 20);
   ground3 = new Ground(990, 240, 200, 20);

    block1 = new Block(590, 155, 30, 40);

    block2 = new Block(560, 195, 30, 40);
    block3 = new Block(590, 195, 30, 40);
    block4= new Block(620, 195, 30, 40);

    block5 = new Block(530, 235, 30, 40);
    block6 = new Block(560, 235, 30, 40);
    block7 = new Block(590, 235, 30, 40);
    block8 = new Block(620, 235, 30, 40);
    block9 = new Block(650, 235, 30, 40);

    block10 = new Block(500, 275, 30, 40);
    block11 = new Block(530, 275, 30, 40); 
    block12 = new Block(560, 275, 30, 40);
    block13 = new Block(590, 275, 30, 40);
    block14 = new Block(620, 275, 30, 40);
    block15 = new Block(650, 275, 30, 40);
    block16 = new Block(680, 275, 30, 40);

    block17 = new Block(930, 135, 30, 40);
    block18 = new Block(960, 135, 30, 40);
    block19 = new Block(990, 135, 30, 40);
    block20 = new Block(1020, 135, 30, 40);
    block21 = new Block(1050, 135, 30, 40);

    block22 = new Block(960, 55, 30, 40);
    block23 = new Block(990, 55, 30, 40);
    block24= new Block(1020, 55, 30, 40);

    block25 = new Block(990, 15, 30, 40);

    


    
    polygon = new Polygon(200, 200, 40, 40);

    slingshot = new SlingShot(polygon.body,{x:200, y:200});
}

function draw(){
   background(0,0,0);

   textSize(40)
   text("Drag the Hexagon and release it to shoot", 300, 50);
   text("Press 'Space' to get a Second Chance", 320, 90)

    Engine.update(engine);

    strokeWeight(2);
   
    fill(255, 255, 255);
   ground1.display();
   ground3.display();
   fill(0,0,0);
   ground2.display();

   fill(0, 0, 255);
   block1.display();
   fill(255, 255, 0);
   block2.display();
   fill(238, 130, 238);
   block3.display();
   fill(0, 255, 0);
   block4.display();
   block5.display();
   fill(238, 130, 238);
   block6.display();
   fill(255, 0, 0);
   block7.display();
   fill(255, 165, 0);
   block8.display();
   fill(0, 0, 255);
   block9.display();

   fill(238, 130, 238);
   block10.display();
   fill(75, 0, 130);
   block11.display();
   fill(0, 0, 255);
   block12.display();
   fill(0, 255, 0);
   block13.display();
   fill(255, 255, 0);
   block14.display();
   fill(255, 165, 0);
   block15.display();
   fill(255, 0, 0)
   block16.display();

   fill(0, 255, 0);
   block17.display();
   fill(238, 130, 238);
   block18.display();
   fill(0, 0, 255);
   block19.display();
   fill(255, 0, 0);
   block20.display();
   fill(75, 0, 130);
   block21.display();

   fill(0, 0, 255);
   block22.display();
   fill(0, 255, 0);
   block23.display();
   fill(255, 255, 0);
   block24.display();

   fill(255, 165, 0);
   block25.display();

   polygon.display();
   slingshot.display();

}

function mouseDragged(){
   Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
   slingshot.fly();
}

function keyPressed(){
   if(keyCode ===32){
       slingshot.attach(polygon.body);
   }
}

//async function getBackgroundImage(){
   //var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
   //var responseJson = await response.json();
  // var dateTime = responseJson.datetime
   //var time = dateTime.slice(11, 13)
   //if(time >= 06 && time <= 18 ){
    //   bg= "lightImage.jpg"
   //}
   //else{
     // bg = "darkImage.jpg"
   //}
  // backgroundImg=loadImage(bg)
  // console.log(time);
//}