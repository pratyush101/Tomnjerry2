
var backgroundImage;
var jerry, jerryImage1, jerryImage2, jerryAnimation3;
var tom, tomImage1, tomImage2, tomImage3;

function preload() {
   
backgroundImage=loadImage("images/garden.png");

//for jerry
jerryImage1= loadAnimation("images/jerryOne.png");
jerryImage2=loadAnimation("images/jerryFour.png")
jerryImage3= loadAnimation("images/jerryTwo.png" , "images/jerryThree.png");


// for tom
tomImage1= loadAnimation("images/tomOne.png");
tomImage2= loadAnimation("images/tomFour.png");
tomImage3= loadAnimation("images/tomTwo.png", "images/tomThree.png");






}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
  
    tom=createSprite(870,600);
    tom.addAnimation("tomStanding",tomImage1);
    tom.scale=0.2;


    jerry=createSprite(200,600);
    jerry.addAnimation("jerryStanding", jerryImage1);
    jerry.scale=0.15;

}

function draw() {

    background(backgroundImage);

    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < tom.width/2 - jerry.width/2)
    {
    tom.velocityX=0;
    tom.addAnimation("tomfinal",tomImage2 );
    tom.changeAnimation("tomfinal",tomImage2);

    jerry.addAnimation("jerryfinal",jerryImage2);
    jerry.changeAnimation("jerryfinal",jerryImage2);
    
    }

    keyPressed();

    drawSprites();
}






function keyPressed(){
//For moving and changing animation write code here
if(keyCode === LEFT_ARROW){

    tom.velocityX = -5;
    tom.addAnimation("tomRunning",tomImage3 );
    tom.changeAnimation("tomRunning",tomImage3 );
  
    jerry.addAnimation("jerryTeasing", jerryImage3);
    jerry.changeAnimation("jerryTeasing", jerryImage3);
    
    }



}
  

