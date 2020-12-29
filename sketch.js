const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var box,ground,bar1,bar2,bar3,barImage,rope;
var score = 0  ;
var gameState = "onSling";
var backgroundImg

function preload(){
    //getBackgroundImg();
}

function setup(){
    createCanvas(1500,700);
    engine = Engine.create();
    world = engine.world;

    
    box = new Box(150,400,75,75);
    ground = new Ground2(1536/2,698,1536,40);
    base1 = new Ground2(640,600,290,20);
    base2 = new Ground2(1150,350,200,20);

    block1 = new Block(520,558,40,60);
    block2 = new Block(560,558,40,60);
    block3 = new Block(600,558,40,60);
    block4 = new Block(640,558,40,60);
    block5 = new Block(680,558,40,60);
    block6 = new Block(720,558,40,60);
    block7 = new Block (760,558,40,60);
    
    block11 = new Block2(560,498,40,60); 
    block12 = new Block2(600,498,40,60); 
    block13 = new Block2(640,498,40,60); 
    block14 = new Block2(680,498,40,60); 
    block15 = new Block2(720,498,40,60); 

    block22 = new Block3(600,438,40,60);
    block23 = new Block3(640,438,40,60);
     block24 =new Block3(680,438,40,60);

    block25 = new Block(640,378,40,60);

    blockl1 = new Block(1070,308,40,60);
    blockl2 = new Block(1110,308,40,60);
    blockl3 = new Block(1150,308,40,60);
    blockl4 = new Block (1190,308,40,60);
    blockl5 = new Block (1230,308,40,60)

    blockl11 = new Block3(1110,248,40,60);
    blockl12 = new Block3(1150,248,40,60);
    blockl13 = new Block3(1190,248,40,60);

    blockl21 = new Block2(1150,188,40,60);
    
    rope = new SlingShot(box.body,{x:150,y:350});    
}  

function draw(){
   // if(backgroundImg){
     //   background(backgroundImg);
   // }
   background(55,43,43)
   
    Engine.update(engine);

    strokeWeight(2);
    stroke(0);
	
    textSize(18);
    textFont("century gothic");
    text("Press 'Space' to Get One More Chance!",10,20);
    text("Score : "+score, 10,40);

    box.display();
    ground.display();
    base1.display();
    base2.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block11.display();
    block13.display();
    block14.display();
    block15.display();
    block12.display();

    block22.display();
    block23.display();
    block24.display();
    block25.display();
    blockl2.display();
    blockl1.display();
    blockl3.display();
    blockl4.display();
    blockl5.display();

    blockl11.display();
    blockl12.display();
    blockl13.display();

    blockl21.display();

    rope.display();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block11.score();
    block13.score();
    block14.score();
    block15.score();
    block12.score();

    block22.score();
    block23.score();
    block24.score();
    block25.score();
    blockl2.score();
    blockl1.score();
    blockl3.score();
    blockl4.score();
    blockl5.score();

    blockl11.score();
    blockl12.score();
    blockl13.score();

    blockl21.score();


    textSize(50);
    textFont("courier new")
    if(score===500){text("You Win!",510,300)}

}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(box.body, {x: mouseX , y: mouseY});
    }
}

function mouseReleased(){
    rope.fly();
    gameState = "launched";
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(box.body,{x:235, y:420})
        rope.attach(box.body);
        gameState = "onSling";
  }
  
  if(keyCode === 32){
    box.x=200;
    box.y=200;
  }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/America/New_York");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1800){
        bg = "BG1.jpg";
    }
    else{
        bg = "BG2.PNG";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}

