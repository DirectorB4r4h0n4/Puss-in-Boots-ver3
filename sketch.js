var Lobo;
var GatoconBotas, GatoconBotas_asustado;
var ground, groundImage,ivicibleGround;
var ennemy1, ennemy2, ennemy3, ennemy4, ennemy5;
var bonus1, bonus2, bonus3; 
var bonus4, bonus5, bonus6, bonus7;
var rand
var play = 1;
var end = 0;
var gameState = play;
var score;
var enemiesGroup, bonusGroup;
var playScenary, playScenaryImg, restart, restartImg;
var gameOver, gameOverImg;
var backgroud;

function preload(){
Lobo = loadImage("La Muerte sin Máscara.png");
GatoconBotas = loadImage("PussInBoots2022.png");

groundImage = loadImage("ground.png");

ennemy1 = loadImage("Troll.png");
ennemy2 = loadImage("Minotauro.png");
ennemy3 = loadImage("Dragón.png");
ennemy4 = loadImage("Enano.png");
ennemy5 = loadImage("Pirata 1.png");

bonus1 = loadImage("jwell.png");
bonus2 = loadImage("cash.png");
bonus3 = loadImage("Huevos.png");
bonus4 = loadImage("Tesoro 1.png");
bonus5 = loadImage("Tesoro 2.png");
bonus6 = loadImage("diamonds.png");
bonus7 = loadImage("lámpara.png");

backgroud = loadImage("Fondo.png")
playScenaryImg = loadImage("Press Play.png");
gameOverImg = loadImage("Game Over.png");
restartImg = loadImage("reset.png");
}

function setup() {
 createCanvas(windowWidth, windowHeight);
 //create sprite Gato
 GatoconBotas = createSprite(70, height-90, 30, 50);
 GatoconBotas.setCollider("square", 35, 35, 35);
 GatoconBotas.addAnimation("caught", GatoconBotas_asustado);
 GatoconBotas.debug = true;

 GatoconBotas.scale = 0.7;

 //Suelo
 ground = createSprite(width/2, height-99, width, 20);
 ground.addImage("ground", groundImage);
 invicibleGround = createSprite(width/2, height-99, width, 20)
 invicibleGround.visible = false;
  

 enemiesGroup = new Group();
 bonusGroup = new Group();

 playScenary = createSprite(500, 500);
 playScenary.addImage(playScenaryImg);
 playScenary.sacle = 0.7;
 playScenary.visible = false;

 gameOver = createSprite(500, 500);
 gameOver.addImage(gameOverImg);
 gameOver.visible = false;

 restart = createSprite(500, 540);
 restart.addImage(restartImg);
 restart.visible = false;

 
 score = 0;
}

function draw() {

 background(backgroud);
 text("Puntuación " + score, 500, 15);


 if (gameState == lobby){
  score = score = 0
  playScenary
 }

 if (gameState == play){
    score = score + Math.round(frameCount/60);
    ground.velocityX = -2;
    console.log(ground.x)

    if(ground.x < 0){
        ground.x = ground.width/2;
 }

 if(touches.length > 0 || keyDown("space")&& trex.y >= 100 ){
    trex.velocityY = -10;
    jumpSound.play();
    touches = []
  
  

} 

  // aparecer enemigos
 spawnEnemmies
}
