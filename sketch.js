var r1,r2


function setup() {
  createCanvas(800,400);
  r1=createSprite(400, 200, 50, 50);
  r1.shapeColor="blue"
 // r1.velocityY=2
  r1.velocityX=-2
  r2=createSprite(40, 200, 100, 50);
  r2.shapeColor="blue"
  //r2.velocityY=2
  r2.velocityX=2
 edges=createEdgeSprites()
}

function draw() {
  background(255,255,255);  
 // r2.x=mouseX
//r2.y=mouseY
if(touch(r1,r2)){
text(" adya",200,200)
}

  bounce(r1,r2)
  drawSprites();
}

