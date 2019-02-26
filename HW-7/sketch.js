
// creates an object named ball
let ball = {};
// Sets with of ball to 40
ball.width = 40;
// Center of ball at (10,10)
ball.x = 10;
ball.y = 10;
// delta_x and delta_y change when the ball reaches the bounds of the canvas to
// make it go in the opposing direction
ball.delta_x = 1;
ball.delta_y = 1;
// scale_x and scale_y is the "speed" of the ball in the x y direction
ball.scale_x = 1;
ball.scale_y = 1;
// Roundness of edges
ball.round=0;

//Creates object for the balls color
let ballColor = {};
ballColor.red=255;
ballColor.blue=255;
ballColor.green=255;


function setup() {
  // Canvas will be 400px tall by the wndows width
    createCanvas(windowWidth, 400);
// white background
    background(255);
}



function draw() {
// Movement of center of the ball is calculated then added to the balls x and y vars
    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;

// Checks if ball is within the height of the window if not it changes direction
// by changing delta_x from positive to negative or negative to positive
    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
// Checks if ball is within the height of the window if not it changes direction
// by changing delta_y from positive to negative or negative to positive
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }
// White fill
    fill(ballColor.red,ballColor.green,ballColor.blue);
    changeRect();
// Draws ball
    rect(ball.x, ball.y, ball.width, ball.width,ball.round);
}

function changeRect(){
  //Adds 5 to red green and blue  per frame until it reaches its max at 255
  ballColor.red = constrain(ballColor.red+5,0,255);
  ballColor.green= constrain(ballColor.green+5,0,255);
  ballColor.blue= constrain(ballColor.blue+5,0,255);
  // Lowers the value until it reaches 0 and becomes a square again min value of 0
  ball.round= constrain(ball.round-1,0,45);
}

// When mouse is pressed it changes the scale of the speed by on the mouse x,y position
function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
// Changes the rounded corners from squared
    ball.round = ball.round+30;
// assignes a random value between 0-255 for red green and blue
    ballColor.red = int(random()*255);
    ballColor.green= int(random()*255);
    ballColor.blue= int(random()*255);

}
