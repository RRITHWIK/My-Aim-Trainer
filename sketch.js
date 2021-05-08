var sprite;
var targetGroup;
var target1;
var gameState="done";
var count=0;
var flag="home";

function preload()
{
  targetImg=loadImage("target.png");
}




function solo(){
//background("lightblue");
clear();
//single.hide();
text("Targets Remaining "+count,windowWidth/2-100,windowHeight/10);  
     
if(frameCount%40===0&&gameState==="done"){
    gameState="ready"
    target1 = createSprite(50,50,50,100)
    target1.addImage("target",targetImg)
    target1.scale = 0.2;
    target1.x = Math.round(random(100,width-200))
    target1.y = Math.round(random(100,height-200))
    //targetGroup.add(target1)
    textSize(30)
    if(mousePressedOver(target1))
    {
      target1.destroy();
      console.log(target1);
      if(target.removed===true)
      {
        count++;
      }
      gameState="done";  
     
    }
  
  }
}




function setup() {
  createCanvas(windowWidth,windowHeight);
  //sprite=createSprite(20,20,100,100);
  //sprite.x=World.mouseX;
  //sprite.y=World.mouseY;
  //targetGroup=new Group();
}

function draw() {
  background("lightblue");

  if(flag==="home")
  {
    homepage();
    
  }
  if(flag==="solo")
  {
   // single.hide();
   // Frenzy.hide();
    solo();  
  }
  // for(var x=0;x<targetGroup.length;x++)
  // {
  //   if(sprite.isTouching(targetGroup[x]))
  //   {
  //     targetGroup[x].destroy();
  //     console.log("inside")
  //   }
  // }
  drawSprites();
  
}

function homepage() {
  background("red");
  
  textSize(50)
  textFont("Impact")
  fill("")
  text("Valorant Aim Trainer",windowWidth/3,windowHeight/3);
  
  text("Welcome to Rithwik's Aim Trainer",windowWidth/4,windowHeight/5)

  single=createButton("Solo Target");
  single.position(windowWidth/2,windowHeight/2)
  Frenzy = createButton("Tile Frenzy")
  Frenzy.position(windowWidth/4, windowHeight/2)
  single.mousePressed(()=>{
//    solo();
    single.hide();
    Frenzy.hide();
  flag="solo";
    
  })

}
