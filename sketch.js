var navio,navioimg,mar,marimg
function preload(){
navioimg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
marimg = loadImage("sea.png")

}

function setup(){
  createCanvas(400,400);
 // mar = createSprite(100,390,300,15);
 // mar.addImage(marimg);
 // mar.scale = 0.7;
}

function draw() {
   
  drawSprites();

 
}
