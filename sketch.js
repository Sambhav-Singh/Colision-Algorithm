var fixedObject;
var movingObject;

function setup() {
  createCanvas(800,400);

  fixedObject = createSprite(400,200,20,20);
  fixedObject.shapeColor = "red";

  movingObject = createSprite(40,90,20,20);
  movingObject.shapeColor = "blue";

  
}

function draw() {
  background(255,255,255);

  movingObject.x = World.mouseX;
  movingObject.y = World.mouseY;

  if(movingObject.x - fixedObject.x <= movingObject.width/2 + fixedObject.width/2 &&
    fixedObject.x - movingObject.x <= fixedObject.width/2 + movingObject.width/2 && 
    movingObject.y - fixedObject.y <= fixedObject.height/2 + movingObject.height/2 &&
    fixedObject.y - movingObject.y <= movingObject.height/2 + fixedObject.height/2) {

   fixedObject.shapeColor = "green";
   movingObject.shapeColor = "green";

  }
  
  else {

    fixedObject.shapeColor = "red";
    movingObject.shapeColor = "blue";
  } 

  drawSprites();
}