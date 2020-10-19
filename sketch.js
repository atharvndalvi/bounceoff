var movingRect,fixedRect;

var box1,box2,box3,box4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "blue";

  movingRect = createSprite(400,800,80,30);
  movingRect.shapeColor = "yellow";

  box1 = createSprite(100,100,30,30);
  box1.shapeColor = "white";

  box2 = createSprite(500,100,30,30);
  box2.shapeColor = "orange";

  box3 = createSprite(100,100,30,30);
  box3.shapeColor = "red";

  box4 = createSprite(100,800,30,30);
  box4.shapeColor = "lightblue";

  fixedRect.velocityY = 5;
  movingRect.velocityY = -5;

  box1.velocityX = 3;
  box2.velocityX = -3;

  box3.velocityY = 3;
  box4.velocityY = -3;
}

function draw() {
  background(0);  

  bounceoff(box1,box2);
  bounceoff(movingRect,fixedRect);
  bounceoff(box3,box4);


  drawSprites();
}

function bounceoff(object1,object2){

  if(object1.x - object2.x < object1.width/2+object2.width/2 &&
    object2.x - object1.x < object1.width/2+object2.width/2 ){
      object1.velocityX = object1.velocityX *(-1)
      object2.velocityX = object2.velocityX *(-1)
    }

    if( object1.y - object2.y < object1.height/2+object2.height/2 &&
      object2.y - object1.y < object1.height/2+object2.height/2){
        object1.velocityY = object1.velocityY *(-1)
        object2 .velocityY = object2.velocityY *(-1)
    }
      




}