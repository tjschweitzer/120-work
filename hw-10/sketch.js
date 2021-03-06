// Number of rows and collums
var cols = 42;
var rows = 42;
// Offset valuse to make circles look like scales
var offset =0;

function make3Darray(cols, rows) {
  // this makes the 2d array of cols by rows
  var arr = new Array(cols);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
    for (var j =0; j<arr[i].length; j++){
      arr[i][j] = new Array(3);
      arr[i][j] = changeColor();
    }
  }
  return arr;
}

// Return an array with three eleemnts each ranging from 0-255
function changeColor(){
  scale = new Array(3);
  scale = [int(random(255)),int(random(255)),int(random(255))]
  return scale;
}


function setup() {
  createCanvas(600, 600);
  balls = make3Darray(cols, rows);
}

function draw() {

  background(51);
  for (var i = 0; i < cols; i++) {
    // offset sets the placement on the y axis to look like scales
    offset=abs(offset-7.5);
    for (var j = 0; j < rows; j++) {
        stroke(int(random(255)));
      var x = i * 15;
      var y = j * 15 + (offset * -1);
      // display sets color on circles
      fill(balls[i][j][0], balls[i][j][1], balls[i][j][2]);
      ellipse(x,y,30,30);
    }
  }

  for (var i = 1; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      // moves the color or each circle one to the left
        balls[i-1][j][0] = balls[i][j][0];
        balls[i-1][j][1] = balls[i][j][1];
        balls[i-1][j][2] = balls[i][j][2];
    }
    // random color to the right most row
    balls[41][i] = changeColor();
    }
}
