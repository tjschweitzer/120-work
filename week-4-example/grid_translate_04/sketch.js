function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255);

  //hair
  noStroke()
  fill(64,51,38);
  arc(250,245,270,420, QUARTER_PI+HALF_PI,QUARTER_PI);

   //face
  noStroke();
  fill(247,221,212);
  ellipse(250,200,190,200);

  //check
  noStroke();
  fill(255, 184, 194);
  ellipse(200,230,30,20);
  ellipse(300,230,30,20);

  //bang
  noStroke();
  fill(64,51,38);
  arc(250,130,160,80, Math.PI, 0);
  arc(180,120,140,128, 0, 0.75*Math.PI);
  arc(320,120,140,128, 0.25*Math.PI, Math.PI);

  //eyes
  stroke(128, 128, 128);
  fill(255);
  ellipse(209, 200, 35, 35);
  ellipse(291, 200, 35, 35);

  //eyeballs
  stroke(128, 128, 128);
  fill(102,102,51);
  ellipse(209, 200, 18, 18);
  ellipse(291, 200, 18, 18);

  //Nose
  noStroke();
  fill(247,221,155);
  triangle(250, 220, 260, 250, 240, 250);

  //Mouth
  noStroke();
  fill(255, 169, 168);
  ellipse(250,270,12,12);

  //Shoulders
  noStroke();
  fill(247,221,212);
  rect(165,315,170,132,18);

  //TSHIRT
  noStroke();
  fill(102,21,173);
  rect(190,310,120,140,8);

  //Neck
  noStroke();
  fill(247,221,212);
  arc(250,310,40,40,0,PI);
  rect(230,280,40,30);

  //ITP
  fill(255, 255, 255);
  text(“!TP”,225,350,150,120);
  textSize(36)

}
