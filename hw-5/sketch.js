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
let colorSpeed = 1;
let spinSpeed = 1;
let spinCount = 0;

function draw(){

  // Math Part - This is all of the incremental equations I used to create the effect

  sqrX = sqrX + moveX;    // How the square moves the in x position
  sqrY = sqrY + moveY;    // How the square moves i nthe Y position
  colorSpeed = int(mouseX/ width *49) +1; //Takes the xposition of the mouse to infulence the  speed it changes color
  spinSpeed = int(mouseY/ width *9) +1;   //Takes the position of the mouse to influence the speed it rotates
  spinCount = spinCount + spinSpeed; // incrementally adds to the rotation of the square

        //This was my code I used for debugging any issues with color or square position
  // background(0);
  // fill(255);
  // text(colorSpeed,100,180);
  // text(colrR,100,200);
  // text(colrG,100,220);
  // text(colrB,100,240);

    //moves canvas to the next starting point for the square
  translate(sqrX,sqrY);
    //rotates the canvas before drawing the square
  rotate(radians(spinCount));
    //applys a white stoke
  stroke(255)
    //selects the color of the square
  fill(colrR,colrG,colrB);
    // Draws the square
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

// This is my color progrssion system I came up with
// colrR 255-0 ,colrG 255, colrB 255  White to Aqua
  if (colorCount == 1){
    colrR = colrR -colorSpeed;
    //when var goes below 0 we set it to 0 and progress to next color transition
    if (colrR <0){
      colorCount =2;
      colrR = 0;
    }
  }

  // colrR 0 , colrB 255 ,colrG 255-0 Aqua to Blue
  if (colorCount == 2){
    colrG = colrG -colorSpeed;
    //when var goes below 0 we set it to 0 and progress to next color transition
    if (colrG <0){
      colorCount =3;
      colrG=0;
    }
  }

  // colrR 0-255 , colrB 255 ,colrG 0 Blue to Fuchsia
  if (colorCount == 3){
    colrR = colrR +colorSpeed;
    //when var goes above 255 we set it to 255 and progress to next color transition
    if (colrR >255){
      colorCount =4;
      colrR = 255;
    }
  }

  // colrR 255 , colrB 255-0 ,colrG 0 Fuchsia to Red
  if (colorCount == 4){
    colrB = colrB -colorSpeed;
    //when var goes below 0 we set it to 0 and progress to next color transition
    if (colrB <0){
      colorCount =5;
      colrB = 0;
    }
  }


  // colrR 255 , colrB 0 ,colrG 0-255 Red to Yellow
  if (colorCount == 5){
    colrG = colrG +colorSpeed;
    //when var goes above 255 we set it to 255 and progress to next color transition
    if (colrG >255){
      colorCount =6;
      colrG =255;
    }
  }
  // colrR 255 , colrB 0 ,colrG 0 Yellow to Green
  if (colorCount == 6){
    colrR = colrR -colorSpeed;
    //when var goes below 0 we set it to 0 and progress to next color transition
    if (colrR <0){
      colorCount =7;
      colrR=0;
    }
  }
  // colrR 255 , colrB 0 ,colrG 0 Green to Black
  if (colorCount == 7){
    colrG = colrG -colorSpeed;
    //when var goes below 0 we set it to 0 and progress to next color transition
    if (colrG <0){
      colrG=0;
      colorCount =8;
    }
  }



  // colrR 0-255 , colrB 0-255 , colrG 0-255 Black to White
  if (colorCount == 8){
    colrB = colrB +colorSpeed;
    colrR = colrR +colorSpeed;
    colrG = colrG +colorSpeed;
      // When one variable goes over 255 Sets all to 255 and gotes to starting color transition 
    if (colrG >255){
      colorCount =1;
        colrB = 255;
        colrR = 255;
        colrG = 255;
    }
  }




}
