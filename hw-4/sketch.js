let r,g,b;
function setup() {
  createCanvas(1000, 1000);
  r = 255
  g = 0
  b = 255
}

function draw() {
background(255);

// Shirt
push();
  translate( 0, 300 );
  noStroke();
  fill(150);
  rect(125,25,150,200);
  fill(255,194,152); //skin tone
  rect(175,-5,50,30);
  triangle(175,25,225,25,200,50);
pop();



// Left arm
push();
  translate( 0, 300 );
  noStroke();
  fill(150);
  rotate (radians(45));
  rect(105,-70,25,100);
  rotate (radians(-45));
  rect(53,95,25,100);
  fill(255,194,152);
  ellipse(66,200,40,40);
pop();


// Right arm
push();
  translate( 200, 400 );
  noStroke();
  fill(150);
  rotate (radians(-45));
  rect(80,0,25,100);
  rotate (radians(45));
  rect(120,-2,25,100);
  fill(255,194,152);
  ellipse(135,100,40,40);
pop();

// Pants
push();
  translate( 0, 500 );
  noStroke();
   fill(61,111,132);
  rect(125,25,150,200);
  fill(255);
  triangle(200,100,180,225,220,225);
pop();

// Face
push();
noStroke();
fill(255,194,152); //skin tone
ellipse(200,200,200,200);

//Whites of eyes
stroke(0 , 0, 0);
fill(255);
ellipse(160, 180, 40, 40);
ellipse(240, 180, 40, 40);

//Iris
stroke(255, 255, 255);
fill(63, 120, 78);
ellipse(160, 180, 20, 20);
ellipse(240, 180, 20, 20);

//Mohawk
stroke(0); // Black stroke On outside of arc
fill(r,g,b); //Mohawk color
arc(200, 50, 150, 150, -5*PI/3,-4*PI/3 );


// Nose
stroke(0);
line(200,190,220,230);
line(220,230,190,230);

 // Mouth
line(150,250,250,250);
noFill();
arc(200,164,200,200,-5*PI/3,-4*PI/3);

pop();

}

//Mouse click to change hair color
// used https://p5js.org/examples/hello-p5-interactivity-1.html
// for how to decare global variables at the start (let r,g,b)
// this function is called on every mouse click.
function mousePressed() {
    // Selects a random int for r from 0-255
    r = random(255);
    // Selects a random int for g from 0-255
    g = random(255);
    // Selects a random int for b from 0-255
    b = random(255);

}
