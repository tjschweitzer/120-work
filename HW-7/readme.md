Trent Schweitzer, Sect 50

[Live Link](https://tjschweitzer.github.io/120-work/HW-7/)


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing


```javascript
// Creates an object named ball
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

function setup() {
// Canvas will be 400px tall by the windows width
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
    fill(255);
// Draws ball
    ellipse(ball.x, ball.y, ball.width, ball.width);
}

// When mouse is pressed it changes the scale of the speed by on the mouses x,y position
function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
}
```
#### How can the ball change directions?
It is able to change directions by the pair of if statements. They check to see if the ball has gone out of the bounds they have set from 0 to the height or the width


## How did you alter the sketch?

I changed the moving object in to a square and then made the rectangle change to a random color when the mouse is clicked. I also made it have more rounded corners when the mouse is clicked.
I then made a separate function that is called that changes the color of the rectangle back to white and makes it turn back in to a square by using the constrain function.
