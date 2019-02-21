function setup(){
  createCanvas(800,600); // Creates canvas sized 600x800
  background(0); // Creates a Black background
  frameRate(60);
}

let tri;
tri1 = {
  side1x: 0,
  side1y: 0,
  side2x: 0,
  side2y : 0,
  side3x : 0,
  side3y : 0
};
tri2 = {
  side1x: 800,
  side1y: 0,
  side2x: 800,
  side2y : 0,
  side3x : 800,
  side3y : 0
};
tri3 = {
  side1x: 0,
  side1y: 600,
  side2x: 0,
  side2y : 600,
  side3x : 0,
  side3y : 600
};
tri4 = {
  side1x: 800,
  side1y: 600,
  side2x: 800,
  side2y : 600,
  side3x : 800,
  side3y : 600
};
tri5 = {
  side1x: 400,
  side1y: 300,
  side2x: 400,
  side2y : 300,
  side3x : 400,
  side3y : 300
};



function draw(){
  // text( tri.side1x, 20, 80 );
  // text( tri.side1y , 20, 100 );
  // text( tri.side2x, 20, 120 );
  // text( tri.side2y , 20, 140 );
  // text( tri.side2x, 20, 160 );
  // text( tri.side3y , 20, 180 );


//Top Left
    stroke(255,0,0);
    fill(255,255,0);
    triangle(tri1.side1x, tri1.side1y, tri1.side2x, tri1.side2y,tri1.side3x, tri1.side3y);

    tri1.side1x = constrain(tri1.side1x + random(-5,5),0,800);
    tri1.side1y = constrain(tri1.side1y + random(-5,5),0,600);
    tri1.side2x = constrain(tri1.side2x + random(-5,5),0,800);
    tri1.side2y = constrain(tri1.side2y + random(-5,5),0,600);
    tri1.side3x = constrain(tri1.side3x + random(-5,5),0,800);
    tri1.side3y = constrain(tri1.side3y + random(-5,5),0,600);


//Top Right
    stroke(0,255,0);
    fill(255,0,255);
    triangle(tri2.side1x, tri2.side1y, tri2.side2x, tri2.side2y,tri2.side3x, tri2.side3y);

    tri2.side1x = constrain(tri2.side1x + random(-5,5),0,800);
    tri2.side1y = constrain(tri2.side1y + random(-5,5),0,600);
    tri2.side2x = constrain(tri2.side2x + random(-5,5),0,800);
    tri2.side2y = constrain(tri2.side2y + random(-5,5),0,600);
    tri2.side3x = constrain(tri2.side3x + random(-5,5),0,800);
    tri2.side3y = constrain(tri2.side3y + random(-5,5),0,600);


//Bottom Right
  stroke(222,87,95);
  fill(15,76,73);
  triangle(tri3.side1x, tri3.side1y, tri3.side2x, tri3.side2y,tri3.side3x, tri3.side3y);

  tri3.side1x = constrain(tri3.side1x + random(-5,5),0,800);
  tri3.side1y = constrain(tri3.side1y + random(-5,5),0,600);
  tri3.side2x = constrain(tri3.side2x + random(-5,5),0,800);
  tri3.side2y = constrain(tri3.side2y + random(-5,5),0,600);
  tri3.side3x = constrain(tri3.side3x + random(-5,5),0,800);
  tri3.side3y = constrain(tri3.side3y + random(-5,5),0,600);


//Bottom Left
  fill(124,70,129);
  stroke(109,163,176);
  triangle(tri4.side1x, tri4.side1y, tri4.side2x, tri4.side2y,tri4.side3x, tri4.side3y);

  tri4.side1x = constrain(tri4.side1x + random(-5,5),0,800);
  tri4.side1y = constrain(tri4.side1y + random(-5,5),0,600);
  tri4.side2x = constrain(tri4.side2x + random(-5,5),0,800);
  tri4.side2y = constrain(tri4.side2y + random(-5,5),0,600);
  tri4.side3x = constrain(tri4.side3x + random(-5,5),0,800);
  tri4.side3y = constrain(tri4.side3y + random(-5,5),0,600);


//Middle Triangle
  fill(128);
  stroke(255);
  triangle(tri5.side1x, tri5.side1y, tri5.side2x, tri5.side2y,tri5.side3x, tri5.side3y);

  tri5.side1x = constrain(tri5.side1x + random(-5,5),0,800);
  tri5.side1y = constrain(tri5.side1y + random(-5,5),0,600);
  tri5.side2x = constrain(tri5.side2x + random(-5,5),0,800);
  tri5.side2y = constrain(tri5.side2y + random(-5,5),0,600);
  tri5.side3x = constrain(tri5.side3x + random(-5,5),0,800);
  tri5.side3y = constrain(tri5.side3y + random(-5,5),0,600);


}
