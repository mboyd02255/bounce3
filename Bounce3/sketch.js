var song;

// function preload() {
// 	song = loadSound("march.mp3");
// }
var v = 0;


function setup() {
  createCanvas(400, 400);
  v = 0;
  x = random((width/2)-100, (width/2));
  y = random((height/2)-100,(height/2));
  int_angle = random(TWO_PI);
  //int_angle = PI/2.9;
  angle = int_angle;
  sizex = 100;
  sizey = 100;
  rvalue = 255;
  gvalue = 255;
  bvalue = 255;
	var button = createButton("Start");
	button.mousePressed(StartSketch);
	song = loadSound("march.mp3");
	popfx = loadSound("pop.mp3");
	popfx.setVolume(0.5);
}

function StartSketch() {
	if (! song.isPlaying()){
		song.play();
			v = 3;
	} else {
		song.pause();
			v = 0;
	}
}

function draw() {
  if (x >=width-sizex) {
    angle = TWO_PI - angle;
    rvalue = random(255);
    bvalue = random(255);
    gvalue = random(255);
		popfx.play();
  } else if (x <= 0) {
    angle = TWO_PI - angle;
    rvalue = random(255);
    bvalue = random(255);
    gvalue = random(255);
		popfx.play();
  } else if (y >= height-sizey) {
    angle = PI - angle;
    rvalue = random(255);
    bvalue = random(255);
    gvalue = random(255);
		popfx.play();
    //angle = TWO_PI - angle;
  } else if (y <= 0) {
    angle = PI - angle;
    rvalue = random(255);
    bvalue = random(255);
    gvalue = random(255);
		popfx.play();
  }

  x = x + v * sin(angle);
  y = y + v * cos(angle);
  background(80);
  fill(rvalue, gvalue, bvalue);
  rect( x, y, sizex, sizey);

}

// Function to reverse angle on mouse click
	// function mouseClicked() {
  //   angle = - angle;
  // }
