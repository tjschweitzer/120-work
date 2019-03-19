
function setup() {
  createCanvas( 600, 600 );
  background( 'rgb(204, 228, 254)' );

} // ENDING BRACKET



//Adding draw function
function draw() {



drawVenom(); //~~~~~~~~This calls the function drawVenom

}// ~~~~~~~~~ADDED ENDING BRACKET FOR DRAW

//Venom function
function drawVenom() {
stroke(45);
fill(65);
//Background legs
rect(200, 270, 10, 283, 0, 0, 75, 3);
rect(350, 275, 10, 275, 0, 0, 3, 75);
//Body
fill(75);
noStroke(); //~~~~~~~~~~~MISSING SEMICOLIN
ellipse(300, 200, 300, 200);
//Foreground legs
rect(250, 275, 10, 300, 0, 0, 55, 3);
rect(400, 260, 10, 315, 0, 0, 3, 55);
//Left eye
stroke(55);
strokeWeight(4);
fill(255);
rect(155, 165, 50, 35, 15, 95, 0, 100);
//Right eye
rect(250, 165, 75, 35, 95, 0, 95, 0);
//Tongue
noStroke(); //~~~~~~~~~~~MISSING SEMICOLIN
fill('rgb(255, 166, 176)');
triangle(200, 235, 215, 243, 150, 265);
triangle(150, 265, 165, 257, 100, 240);
triangle(100, 240, 110, 245, 105, 200);
triangle(105, 210, 125, 210, 105, 200);
//Mouth
noFill(); //~~~~~~~~~~~MISSING SEMICOLIN
stroke(45);
arc(200, 225, 20, 20, 0, radians(270));
arc(220, 232, 25, 20, radians(280), radians(215));
}
