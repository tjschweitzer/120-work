class Obstacle {
//Positioning the obstacles
constructor(){
  this.top = random(height/2);
  this.bottom = random(height/2);
  this.x = width;
  this.wi = 45;
  this.speed = 3;
}
//Drawing the obstacles
  show() {
    noStroke();
    fill('brown');
    rect(this.x, 0, this.wi, this.top);
    rect(this.x, height-this.bottom, this.wi, this.bottom);
  }

//Speed of obstacle movement
  update() {
    this.x -= this.speed;
  }
}
