//function Glass(glassimage, scale_factor_factor, shake){
function Glass(){

  // Choose glass type
  glass_type = floor(random(10));
  this.img = img[glass_type];
  this.crk = crk[glass_type];

  this.shake = 0;
  break_pitch = random(100, width - 100); // randm break_pitch between 100 and 700
  this.sc = 0.5 - ((break_pitch-100) * 0.3 / 600); // random scale factor based on break_pitch

  this.x = 500;
  this.y = 375 - (300 * this.sc); // Ensure bottom of glass is static

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
      image(face[5], 300, 225, 330, 330); }
    else {
      image(face[0], 300, 225, 325, 325);
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


    // Play scream sound, adjust shake when mouse is pressed and glass_health is above 0. Reduce breath. Reduce glass_health.
    if (mouseIsPressed && glass_health > 0 && breath > 0) {
      breath -= 25;
      if (abs(mouseX - break_pitch) < 50 && abs(mouseX - break_pitch) > 25 ) {
        this.shake = 2;
        this.vol = 0.3;
        glass_health -= 20;
      } else if (abs(mouseX - break_pitch) < 25 && abs(mouseX - break_pitch) > 10 ) {
        this.shake = 5;
        this.vol = 0.5;
        glass_health -= 50;
      } else if (abs(mouseX - break_pitch) < 10 && abs(mouseX - break_pitch) > 5 ) {
        this.shake = 10;
        this.vol = .75;
        glass_health -= 100;
      } else if (abs(mouseX - break_pitch) < 5) {
        this.shake = 20;
        this.vol = 1;
        glass_health -= 300;
      } else if (abs(mouseX - break_pitch) > 50) {
        this.shake = 0;
        this.vol = 0;
      }
      if (glass_health < 0) {
          glass_health = 0;
        }

      if (!scream.isPlaying()) {
        scream.loop();
        jingle.loop();

      }

    } else {
        scream.stop();
        jingle.stop();
        this.shake = 0;
    }


    scream.rate(pitch/300 + 0.25);
    jingle.setVolume(this.vol);




    // Game over screen
    if (breath <= 0) {
      breath = 0;
      ellipse(width/2, height/2, 300, 200);
        }

    }

}
