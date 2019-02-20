function setup(){
  createCanvas(800,600); // Creates canvas sized 600x800
  background(0); // Creates a Black background
  frameRate(60);
}

var tri = {
tri.side1x : 0,
tri.side1y : 0,
tri.side2x : 1,
tri.side2y : 0,
tri.side3x : 0,
tri.side3y : 1
}



function draw(){
  fill(255,255,00);
  nostroke();

  tri.side2x = tri.side2x + random(10);
  tri.side2y = tri.side2y + random(10);
  tri.side3x = tri.side3x + random(10);
  tri.side3y = tri.side3y + random(10);


  triangle(side1x,side1y,side2x,side2y,side3x,side3y);

  tri.side1x = tri.side3x;
  tri.side1y = tri.side3y;

}
