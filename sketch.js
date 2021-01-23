var canvas, backgroundImage, playerCount, database, allPlayers;
var gameState = 0;
var distance = 0;
var form, player, game;
var cars, car1, car2, car3, car4;
var car1Image, car2Image, car3Image, car4Image, backgroundImage, trackImage;

function preload() {
    car1Image = loadImage("Sprites/car1.png");
    car2Image = loadImage("Sprites/car2.png");
    car3Image = loadImage("Sprites/car3.png");
    car4Image = loadImage("Sprites/car4.png");
    backgroundImage = loadImage("Sprites/ground.png");
    trackImage = loadImage("Sprites/track.jpg");
}

function setup(){
    canvas = createCanvas(displayWidth-30,displayHeight-30);

    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");

    if  (playerCount === 4) {
        game.update(1);
    }
    if (gameState === 1) {
        clear();
        game.play();
    }
    if (gameState === 2) {
        game.end();
    }


    //drawSprites();
} 