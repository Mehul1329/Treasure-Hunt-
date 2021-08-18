

var bow , arrow,  background;
var bowImage, arrowImage, backgroundImage;
var zombieImage , zombie
 
function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  //red_balloonImage = loadImage("red_balloon0.png");
  //green_balloonImage = loadImage("green_balloon0.png");
  //pink_balloonImage = loadImage("pink_balloon0.png");
  //blue_balloonImage = loadImage("blue_balloon0.png");
  
  zombieImage = loadAnimation("Zombie Images/z1.png","Zombie Images/z2.png","Zombie Images/z3.png","Zombie Images/z4.png","Zombie Images/z5.png","Zombie Images/z6.png","Zombie Images/z7.png","Zombie Images/z8.png","Zombie Images/z9.png","Zombie Images/z10.png","Zombie Images/z11.png","Zombie Images/z12.png")
}

function setup() {
  createCanvas(600, 400);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(50,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  
}

function draw() {
  // moving ground
    background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    }
  
  //moving bow
  //bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    var temp_arrow = createArrow();
    temp_arrow.addImage(arrowImage);
     temp_arrow.y = bow.y;
  }
  
  var select_balloon = Math.round(random(1,4));
  console.log(select_balloon)
  
  
  
  if(World.frameCount % 90 == 0){
    createZombie();
  }
  //createZombie();
  drawSprites();
}





// Creating  arrows for bow
function createArrow() {
  arrow= createSprite(480, 100, 5, 10);
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  return arrow;
}

function createZombie(){
  
    zombie = createSprite(600,340,50,50);
    zombie.velocityX = -2
    zombie.addAnimation("zombieWalking",zombieImage);
    zombie.scale = 0.5
  }
 // zombie = createSpite(600,350,50,50);

