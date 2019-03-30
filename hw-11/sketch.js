let ghosts= [];
let numberOfGhosts=20;
let window_w=1080;
let window_h=900;
let bg_color=0;
let timeScore=0;



function setup(){
  createCanvas(window_w,window_h);
  frameRate(60);
  for(let i = 0; i<numberOfGhosts;i++){
    ghosts.push(new PackManGhost());
  }
}

function draw(){
  background(bg_color);
  for(let i = 0; i<numberOfGhosts;i++){
    ghosts[i].frame();
    if (ghosts[i].onScreen()==0){
      ghosts.splice(i,1);
      numberOfGhosts=numberOfGhosts-1;
    }
  }

  if(numberOfGhosts==0){
    winner();
  }

}

class PackManGhost{
  constructor(){
    this.size = random(50, 100);
    this.loc_x = random(window_w);
    this.loc_y = random(window_h);
    this.speed=random(.25,2);
    this.move_x=0;
    this.move_y=0;
    this.color = color(random(255), random(255), random(255));
    this.hunting=0;
  }

  frame(){
    this.movement();
    this.display();
  }

  display(){
    push();
    stroke(255);
    fill(this.color);
    rect(this.loc_x, this.loc_y, this.size, this.size, 100, 100,0,0,20);
    fill(255);
    stroke(0);
    ellipse(this.loc_x+(this.size*.3),this.loc_y+(this.size*.4),this.size*.1,this.size*.1);
    ellipse(this.loc_x+(this.size*.6),this.loc_y+(this.size*.4),this.size*.1,this.size*.1);

    pop();

  }

  onScreen(){
    if(this.hunting==1){
    if(this.loc_x<0 || this.loc_x>width){
      return 0;
    }
    if (this.loc_y<0 || this.loc_y>height){
      return 0;
    }
  }
    return 1;
  }

  movement(){
    if (mouseX<this.loc_x){
      this.loc_x=constrain(this.loc_x-this.speed,0-this.size,window_w+5);
    }
    else{
      this.loc_x=constrain(this.loc_x+this.speed,0-this.size,window_w+5);
    }

    if (mouseY<this.loc_y){
       this.loc_y=constrain(this.loc_y-this.speed,0-this.size,window_h+5);
     }
    else{
      this.loc_y=constrain(this.loc_y+this.speed,0-this.size,window_h+5);
    }
  }

  hide(){
    if(mouseX >this.loc_x && mouseX+(this.size*.2)< this.loc_x+(this.size*.8) ){
      if(mouseY >this.loc_y+this.size*.2 && mouseY< this.loc_y+this.size*.8 ){
        if(this.hunting==0){
          this.hunting=1;
          this.speed=this.speed*(-1);
        }
      }
    }
  }

}

function winner(){

  textSize(64);
  bg_color=255;
  text('Winner!!!',random(0,window_w),random(0,window_h));

}

function mousePressed(){
    for(let i = 0; i<numberOfGhosts;i++){
      ghosts[i].hide();
    }
}
