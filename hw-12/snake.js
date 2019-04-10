
class Snake{

  constructor(){
    // Starting points for the snake
    this.snakeBodyx=[400,380,360,340];
    this.snakeBodyy=[400,400,400,400];
    // status:0 is alive
    // status:1 is just ate
    // status:-1 is dead
    this.status=0;
  }

// Calls movement and draws the snake and apples
  frame(){
      this.display();
  }


  display(){

    push();

    // Draws snake head and eyes
    fill('green');
    stroke(1);
    rect(this.snakeBodyx[0], this.snakeBodyy[0], 20, 20);
    if(direction=='left'){
      ellipse(this.snakeBodyx[0]+5, this.snakeBodyy[0]+5,4,4);
        ellipse(this.snakeBodyx[0]+5, this.snakeBodyy[0]+15,4,4);
    }else if(direction=='up'){
      ellipse(this.snakeBodyx[0]+5, this.snakeBodyy[0]+5,4,4);
        ellipse(this.snakeBodyx[0]+15, this.snakeBodyy[0]+5,4,4);
    }else if(direction=='down'){
      ellipse(this.snakeBodyx[0]+5, this.snakeBodyy[0]+15,4,4);
        ellipse(this.snakeBodyx[0]+15, this.snakeBodyy[0]+15,4,4);
    }else{
      ellipse(this.snakeBodyx[0]+15, this.snakeBodyy[0]+5,4,4);
        ellipse(this.snakeBodyx[0]+15, this.snakeBodyy[0]+15,4,4);
    }

    // Draws snake body
    fill('lightgreen');
    for(let i = 1; i<this.snakeBodyx.length;i++){
      rect(this.snakeBodyx[i], this.snakeBodyy[i], 20, 20);
    }
    pop();
  }

  movement(){
    let newHead=[0,0];
    // sets direction of next head movement
    if(direction=='left'){
      newHead[0]=this.snakeBodyx[0]-20;
      newHead[1]=this.snakeBodyy[0];
    } else if(direction=='right'){
      newHead[0]=this.snakeBodyx[0]+20;
      newHead[1]=this.snakeBodyy[0];
    } else if(direction=='up'){
      newHead[0]=this.snakeBodyx[0];
      newHead[1]=this.snakeBodyy[0]-20;
    } else if(direction=='down'){
      newHead[0]=this.snakeBodyx[0];
      newHead[1]=this.snakeBodyy[0]+20;
    }

    // makes sure the snake doesnt go outside of the window
    if(newHead[0]>0 && newHead[0]<780 && newHead[1]>0 && newHead[1]<780){
        splice(this.snakeBodyx,[newHead[0]],0);
        splice(this.snakeBodyy,[newHead[1]],0);
        if(this.status==0){
          this.snakeBodyx.splice(this.snakeBodyx.length -1,1);
          this.snakeBodyy.splice(this.snakeBodyy.length -1,1);
        }else{
          this.status=0;
        }

        // checks if the snake head hits its own body
        for(let i =1;i< this.snakeBodyx.length;i++){
          if(this.snakeBodyx[0]==this.snakeBodyx[i] && this.snakeBodyy[0]==this.snakeBodyy[i]){
            this.status=-1;
            return;
          }
        }
      }

      // checks if snake head is on a piece of food
      this.status = food.appleAte(this.snakeBodyx[0],this.snakeBodyy[0]);

    }

  getStatus(){
    return this.status;
  }

}
