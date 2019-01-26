var scream;
var crack;
var pitch;
var glass;
let img = [];
let crk = [];
let face = [];
let errorbar = 50;
var glass_health;
var shake;
var glass_type;
var scale_factor;
var newlevel;
var score;
var breath;

function preload(){
  // Preload sounds, images and font
  font = loadFont('assets/font.ttf');
  scream = loadSound("assets/scream.mp3");
  crack = loadSound("assets/crack2.mp3");
  jingle = loadSound("assets/jingle.mp3");

  img [0] = loadImage("assets/clear01.png");
  img [1] = loadImage("assets/clear02.png");
  img [2] = loadImage("assets/clear03.png");
  img [3] = loadImage("assets/clear04.png");
  img [4] = loadImage("assets/clear05.png");
  img [5] = loadImage("assets/clear06.png");
  img [6] = loadImage("assets/clear07.png");
  img [7] = loadImage("assets/clear08.png");
  img [8] = loadImage("assets/clear09.png");
  img [9] = loadImage("assets/clear10.png");

  crk [0] = loadImage("assets/crack01.png");
  crk [1] = loadImage("assets/crack02.png");
  crk [2] = loadImage("assets/crack03.png");
  crk [3] = loadImage("assets/crack04.png");
  crk [4] = loadImage("assets/crack05.png");
  crk [5] = loadImage("assets/crack06.png");
  crk [6] = loadImage("assets/crack07.png");
  crk [7] = loadImage("assets/crack08.png");
  crk [8] = loadImage("assets/crack09.png");
  crk [9] = loadImage("assets/crack10.png");

  face[0] = loadImage("assets/face1.png");
  face[1] = loadImage("assets/face2.png");
  face[2] = loadImage("assets/face3.png");
  face[3] = loadImage("assets/face4.png");
  face[4] = loadImage("assets/face5.png");
  face[5] = loadImage("assets/face6.png");
}

function setup (){
  createCanvas (800,450);

  resetSketch();

}

function draw() {
  background(40);
  Slider();
  glass.show();
  //console.log(glass_health, newlevel, score);
  //console.log(breath);

  // Generate new Glass after newlevel counter reachers defined number
  if (newlevel > 150) {
    glass = new Glass();
  }

  // Display Score
  fill(255);
  text('Score', 250, 25);
  text(score, 290, 25);

  // Display Glass Health and breath bars
  rect(10, 20, glass_health * 0.01, 10);
  rect(10, 40, breath * 0.01, 10);

//   if (glass_health == 0){
//     glass = new Glass();
//     //glass_health = 1000;
// }


  }

function keyPressed() {
  resetSketch();
}

function resetSketch(){
  // Initialize Sketch

  // Set volume of sounds
  scream.setVolume(0.5);
  crack.setVolume(0.5);

  // Generate new glass object
  glass = new Glass();
  score = 0;
  breath = 100000;

  // Set text characteristics
  textFont(font);
  textSize(15);
  textAlign(CENTER, CENTER);
}
