let ghosts= [];
let numberOfGhosts=20;
let window_w=1080;
let window_h=900;
let bg_color=0;
let timeScore=0;



function setup(){
  createCanvas(window_w,window_h);
  frameRate(60);
  // Creates all the ghosts needed
  for(let i = 0; i<numberOfGhosts;i++){
    ghosts.push(new PackManGhost());
  }
}

function draw(){
  background(bg_color);
  // Iterates though the array of ghosts
  for(let i = 0; i<numberOfGhosts;i++){
    ghosts[i].frame();
    // If the ghost is no longer on screen it will remove it from the array  and update number of ghosts
    if (ghosts[i].onScreen()==0){
      ghosts.splice(i,1);
      numberOfGhosts=numberOfGhosts-1;
    }
  }
// If no more ghosts winner screen appears
  if(numberOfGhosts==0){
    winner();
  }

}

class PackManGhost{
  constructor(){
    // random size of ghosts
    this.size = random(50, 100);
    // Random location of ghosts`
    this.loc_x = random(window_w);
    this.loc_y = random(window_h);
    // random speed of ghosts
    this.speed=random(.25,2);
    // Random color of ghosts
    this.color = color(random(255), random(255), random(255));
    this.hunting=0;
  }
// Calls movement and draws the ghost
  frame(){
    this.movement();
    this.display();
  }

  display(){
    // Draws the ghosts at set location
    push();
    stroke(255);
    fill(this.color);
    rect(this.loc_x, this.loc_y, this.size, this.size, 100, 100,0,0);
    fill(255);
    stroke(0);
    ellipse(this.loc_x+(this.size*.3),this.loc_y+(this.size*.4),this.size*.1,this.size*.1);
    ellipse(this.loc_x+(this.size*.6),this.loc_y+(this.size*.4),this.size*.1,this.size*.1);

    pop();

  }

// Checks if the ghost body is visable on screen
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

// Moves ghosts in relation to the location of the mouse pointer
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
// Checks if the mouse is located in the body of the ghost when mouse is clicked
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

// Winner screen
function winner(){
  textSize(64);
  bg_color=255;
  text('Winner!!!',random(0,window_w),random(0,window_h));
}

function mousePressed(){
  //checks each ghost locatio nwhen mouse is pressed
    for(let i = 0; i<numberOfGhosts;i++){
      ghosts[i].hide();
    }
}
