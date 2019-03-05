// Number of rows and collums
var cols = 42;
var rows = 42;
// Offset valuse to make circles look like scales
var offset =0;
// initalizing the 2d array
var colors = [];


function make2Darray(cols, rows) {

// this makes the 2d array of cols by rows
  var arr = new Array(cols);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }

  // sets each item in the array to a colorObs
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
    for(let j = 0; j<cols;j++){
      arr[i][j] = new colorObs();
    }
  }
  //returns the new array
  return arr;
}

// object for each circle
class colorObs{
  // Strating color
  constructor() {
    this.red = random(255);
    this.green = random(255);
    this.blue = random(255);
  }
  // changes the color
  change(r,g,b){
    this.red = r;
    this.green = g;
    this.blue = b;
  }
// returns the red color
  r(){
    return this.red;
  }
// returns the green color
  g(){
    return this.green;
  }
// returns the blue color
  b(){
    return this.blue;
  }
// sets the display color
  display(){
    fill(this.red,this.green,this.blue);
    stroke(0);
    }
}

function setup() {
  createCanvas(600, 600);
  balls = make2Darray(cols, rows);
}

function draw() {
  background(51);
  for (var i = 0; i < cols; i++) {
    // offset sets the placement on the y axis to look like scales
    offset=abs(offset-7.5);
    for (var j = 0; j < rows; j++) {
      var x = i * 15;
      var y = j * 15+(offset*-1);
      // display sets color on circles
      balls[i][j].display();
      ellipse(x,y,30,30);
    }
  }

  for (var i = 1; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      // moves the color or each circle one to the left
        balls[i-1][j].change(balls[i][j].r(), balls[i][j].g(), balls[i][j].b());
    }
    // random color to the right most row
  balls[rows-1][i].change(random(255),random(255),random(255));
  }
}
