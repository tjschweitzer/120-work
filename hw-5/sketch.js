function setup(){
  createCanvas(800,600); // Creates canvas sized 600x800
  background(0); // Creates a Black background
  frameRate(60);
}

let sqrX = -5;
let sqrY = -5;
let moveX = 5;
let moveY = 5;
let colrR =255;
let colrG = 255;
let colrB =255;
let colorCount =1;

function draw(){

  // background(0); // Creates a Black background
  sqrX = sqrX + moveX;
  sqrY = sqrY + moveY;
  fill(255);
  text(colorCount,100,180);
  text(colrR,100,200);
  text(colrG,100,220);
  text(colrB,100,240);
  translate(sqrX,sqrY);
  rotate(radians(frameCount));
  stroke(255)
  fill(colrR,colrG,colrB);

  rect(0,0,40,40);

// if the square reaches the left or right side it will change direction
  if ((sqrX > (width))){
    moveX = moveX * - 1;
  } else if (sqrX<0){
      moveX = moveX * - 1;
  }
// if the square reaches the top or bottom it will change directions
  if (sqrY > (height)){
    moveY = moveY * - 1;
  }else if (sqrY<0){
      moveY = moveY * - 1;
  }

// colrR 255-0 ,colrG 255, colrB 255  White to teal
  if (colorCount == 1){
    colrR = colrR -1;
    if (colrR ==0){
      colorCount =2;
    }
  }

  // colrR 0 , colrB 255 ,colrG 255-0 teal to Blue
  if (colorCount == 2){
    colrG = colrG -1;
    if (colrG ==0){
      colorCount =3;
    }
  }

  // colrR 0-255 , colrB 255 ,colrG 0 blue to purple
  if (colorCount == 3){
    colrR = colrR +1;
    if (colrR ==255){
      colorCount =4;
    }
  }

  // colrR 255 , colrB 255-0 ,colrG 0 purple to red
  if (colorCount == 4){
    colrB = colrB -1;
    if (colrB ==0){
      colorCount =5;
    }
  }


  // colrR 255 , colrB 0 ,colrG 0 red to yellow
  if (colorCount == 5){
    colrG = colrG +1;
    if (colrG ==255){
      colorCount =6;
    }
  }
  // colrR 255 , colrB 0 ,colrG 0 red to yellow
  if (colorCount == 6){
    colrR = colrR -1;
    if (colrR ==0){
      colorCount =7;
    }
  }
  // colrR 255 , colrB 0 ,colrG 0 red to yellow
  if (colorCount == 7){
    colrG = colrG -1;
    if (colrG ==0){
      colorCount =8;
    }
  }



  // colrR 255 , colrB 0 ,colrG 0 red to yellow
  if (colorCount == 8){
    colrB = colrB +1;
    colrR = colrR +1;
    colrG = colrG +1;
    if (colrG ==255){
      colorCount =1;
    }
  }




}
