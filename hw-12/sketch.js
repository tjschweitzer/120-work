let hsss;
let food;
let direction = 'none';

function setup(){
  frameRate(10);
  createCanvas(800,800);
  background(255);
  hsss = new Snake();
  food = new Apples();
}

function draw(){
  background(0);
  stroke(0);

  if(hsss.getStatus()==-1){
    // prints game over screen
    gameOver();
  }else{
    if(food.getNumberOfApples()>0){
      fill(255);
      hsss.movement();
      food.drawApples();
      hsss.frame();
    }else{
      // prints winner screen
      winner();
    }
  }
}

function winner(){
  fill(0,255,0);
  textSize(64);
  text("Winner!",250,300);
}

function gameOver(){
  fill(255,0,0);
  textSize(64);
  text("GameOver",250,300);
}

function keyPressed() {
  // if game over no moment is recorded
  if(hsss.getStatus()!=-1){
    if (keyCode === LEFT_ARROW && direction != 'right') {
      if(direction != 'none'){
        direction = 'left';
      }
    } else if (keyCode === RIGHT_ARROW && direction != 'left') {
      direction = 'right';
    } else if (keyCode === UP_ARROW && direction != 'down') {
        direction = 'up';
    } else if (keyCode === DOWN_ARROW && direction != 'up') {
      direction = 'down';
    }
    hsss.movement();
  }
}

class Apples{
  constructor(){
    this.loc_x=[];
    this.loc_y=[];
    this.numberOfApples=160;
    this.makeApples();
  }

  makeApples(){
    let temp_x;
    let temp_y;
    let constainsFlag;
    // let temp = 0;
    let i=0;
    while(i<this.numberOfApples){
      temp_x = int(random(38))*20+20;
      temp_y = int(random(38))*20+20;
      constainsFlag=0;
      // checks if an apple is in the spot already
      for(let j=0;j<this.loc_x.length;j++){
        if(this.loc_x[j]==temp_x && this.loc_y[j]==temp_y){
          constainsFlag=1;
        }
      }
      // if appleisnt in that spot push to array and increase counter
      if(constainsFlag==0){
        this.loc_x.push(temp_x);
        this.loc_y.push(temp_y);
        i=i+1
      }
    }
  }

  drawApples(){
    fill(255,0,0);
    for (let i = 0;i<this.loc_x.length;i++){
      ellipse(this.loc_x[i]+10, this.loc_y[i]+10 ,20,20);
    }
  }

  getNumberOfApples(){
    return this.numberOfApples;
  }

  appleAte(snakeX,snakeY){
// checks if the head of the snake is at the apple
    for (let i = 0;i<this.loc_x.length;i++){
      if (this.loc_x[i]==snakeX && this.loc_y[i]==snakeY){
        this.loc_x.splice(i,1);
        this.loc_y.splice(i,1);
        this.numberOfApples=this.numberOfApples-1;
        return 1;
      }
    }
    return 0;
  }

}
