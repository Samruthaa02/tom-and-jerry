
var jerry,jerryImg;
var tom,tomImg;
var garden,gardenimg

function preload() {
    //load the images here
    gardenimg=loadImage("garden.png");
    jerryImg=loadAnimation("jerryTwo.png","jerryThree.png");
    jerryN=loadImage("jerryOne.png");
    jerryL=loadImage("jerryFour.png");
    tomImg=loadAnimation("tomTwo.png","tomThree.png","tomFour.png");
    tomL=loadImage("tomFour.png")
    tomN=loadImage("tomOne.png")
    


}
function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden=createSprite(width/2,height/2);
    garden.addImage("ground",gardenimg);
    //garden.scale=0.2

    tom=createSprite(695,640,20,20);
    tom.addImage("tomn",tomN);
    tom.scale=0.1

    jerry=createSprite(400,640,20,20);
    jerry.addImage("jerryN",jerryN);
    jerry.scale=0.1;
    jerry.debug=true;
    jerry.setCollider("rectangle",0,0,5,jerry.width);


}




function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    
    jerry.addAnimation("jerry",jerryImg)

    if(tom.isTouching(jerry)){
        keyPressed();
        tom.velocityX=0;
        tom.addImage("tomL",tomL);
        jerry.addImage("jerryL",jerryL);

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
      tom.velocityX=-5;
      tom.addAnimation("tomrunning",tomImg);
      tom.changeAnimation("tomrunning");
  }
  

}
