//function Glass(glassimage, scale_factor_factor, shake){
function Glass(){

  // Choose glass type
  glass_type = floor(random(10));
  this.img = img[glass_type];
  this.crk = crk[glass_type];

  this.shake = 0;
  break_pitch = random(100, width - 100); // break_pitch between 100 and 700
  this.sc = 0.5 - ((break_pitch-100) * 0.3 / 600);
  this.x = 500;
  this.y = 375 - (300 * this.sc);

  this.playsound = 0;
  newlevel = 0;
  glass_health = 10000;

  if (breath < 8000) {
    breath += 2000;
  }


  // Show function
  this.show = function(){

    // Choose what face to Display
    imageMode(CENTER);
    if (mouseIsPressed && glass_health > 0 && breath > 0) {
      image(face[5], 300, 250, 250, 250); }
    else {
      image(face[0], 300, 250, 250, 250);
    }

    // Decide what image to show based on glass_health
    if (glass_health > 0) {
      // Display glass image
      image(this.img, this.x + random(-this.shake, this.shake), this.y + random(-this.shake, this.shake), this.img.width * this.sc, this.img.height * this.sc);
    } else if (glass_health == 0) {
      // Display broken glass
      image(this.crk, this.x, this.y, this.img.width * this.sc, this.img.height * this.sc);
      newlevel++;
      //Play broken sound once, update score
      if (this.playsound == 0) {
        crack.play();
        score = score + 1;
        this.playsound = 1;
    }
  }


    // Play scream sound and adjust shake when mouse is pressed and glass_health is above 0. Reduce breath.
    if (mouseIsPressed && glass_health > 0 && breath > 0) {
      this.shake = 5 * (1 / abs(mouseX - break_pitch + 1));
      breath -= 25;
      if (!scream.isPlaying()) {
        scream.loop();
        jingle.loop(0, 1, this.shake/5);
      }
    } else {
      scream.stop();
      jingle.stop();
      this.shake = 0;
    }

    scream.rate(pitch/300 + 0.25);


    // Reduce health of glass if pitch is within errorbar of break_pitch
    if (mouseIsPressed && breath > 0) {
      if ( (break_pitch - errorbar) < mouseX && mouseX < break_pitch + errorbar ) {
        glass_health -= 100 * (1 / abs(mouseX - break_pitch + 1));
        if (glass_health < 0) {
            glass_health = 0;
          }
        }
      }

    // Game over screen
    if (breath <= 0) {
      breath = 0;
      ellipse(width/2, height/2, 300, 200);
        }

    }

}
