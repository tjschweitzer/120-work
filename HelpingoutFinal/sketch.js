//Variables created to call ball and obstacle sketches
var nose;
let obstacles = [];
//let testObstacle = new Obstacle();

//Canvas creation; my go-to is often (windowWidth, 625) or (wndowWidth, 800) and I thought making a bigger canvas for a usually mobile game woud be kind of interesting.
function setup() {
  createCanvas(windowWidth, 625);

//Allowing sketches to be called
  nose = new Nose();
  for (var i = 0; i < 1; i++) {
  obstacles.push(new Obstacle());
}
}

//Draw function containing the background color, a sky blue that also matches the color of the shirt I'm wearing.
function draw() {
  background('rgb(83, 198, 228)');

//Falling motion added to nose
  nose.update();
//Calling nose.js
  nose.show();

//Calling obstacle
  for (var i = 0; i < obstacles.length; i++) {
    obstacles[i].update();
    obstacles[i].show();
    //testObstacle.show();
    //testObstacle.update();
    //console.log('test');
  }
}

//Function to move nose via pressing the '.' key
function keyPressed() {
  if (key == '.') {
    nose.up();
  }
}
