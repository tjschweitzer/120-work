class Blob{
  constructor(x,y){
    this.minx=x;
    this.miny=y;
    this.maxx=x;
    this.maxy=y;
  }

  frame(){
    stroke(0);
    fill(255);
    strokeWeight(2);
    rectMode(CORNER);
    rect(this.minx,this.miny,this.maxx,this.maxy);
  }

  add(x,y){
    this.minx=min(this.minx,x);
    this.miny=min(this.miny,y);
    this.maxx=min(this.maxx,x);
    this.maxx=min(this.maxy,y);
  }

  blobSize(){
    return (this.maxx-this.minx)*(this.maxy-this.miny);
  }

  isNear(x,y){
    let cx = (this.maxx+this.minx)/2;
    let cy = (this.maxy-this.miny)/2;

    let d = distSq(cx, cy, x, y);
    if (d < distThreshold*distThreshold) {
      return 1;
    } else {
      return -1;
    }
  }

}



var video;
// Previous Frame
var prevFrame;
// How different must a pixel be to be a "motion" pixel
var trackColor=[255,0,0,0];
var threshold = 20;
var distThreshold = 75;

function setup() {
  createCanvas(320, 240);
  // pixelDensity(1);
  video = createVideo('car.mp4',vidLoad);
  video.size(width, height);
  video.hide();
  // Create an empty image the same size as the video
  prevFrame = createImage(video.width, video.height, RGB);
}

function vidLoad() {
  video.loop();
  video.volume(0);
}

function draw() {
  image(prevFrame, 0, 0);

  loadPixels();
  video.loadPixels();
  prevFrame.loadPixels();

  // Begin loop to walk through every pixel
  for (var x = 0; x < video.width; x++) {
    for (var y = 0; y < video.height; y++) {

      // Step 1, what is the location into the array
      var loc = (x + y * video.width) * 4;

      // Step 2, what is the previous color
      var r1 = prevFrame.pixels[loc   ];
      var g1 = prevFrame.pixels[loc + 1];
      var b1 = prevFrame.pixels[loc + 2];

      // Step 3, what is the current color
      var r2 = threshold[0];
      var g2 = threshold[1];
      var b2 = threshold[2];

      // Step 4, compare colors (previous vs. current)
      var diff = distSq(r1, g1, b1, r2, g2, b2);

      // Step 5, How different are the colors?
      // If the color at that pixel has changed, then there is motion at that pixel.
      if (diff > threshold*threshold) {
        // If motion, display black
        pixels[loc] = 0;
        pixels[loc+1] = 0;
        pixels[loc+2] = 0;
        pixels[loc+3] = 255;
        fill('red');
        // console.log(x,y);
      } else {
        // If not, display white
        // pixels[loc] = 255;
        // pixels[loc+1] = 255;
        // pixels[loc+2] = 255;
        pixels[loc+3] = 255;
      }
    }
  }
  updatePixels();

  // Save frame for the next cycle
  //if (video.canvas) {
    prevFrame.copy(video, 0, 0, video.width, video.height, 0, 0, video.width, video.height); // Before we read the new frame, we always save the previous frame for comparison!
  //}
}

function distSq(x1, y1, z1, x2, y2, z2) {
  let d = (x2-x1)*(x2-x1) + (y2-y1)*(y2-y1) +(z2-z1)*(z2-z1);
  return d;
}


function keyPressed() {
  if (key == 'a') {
    distThreshold++;
  } else if (key == 'z') {
    distThreshold--;
  }
  println(distThreshold);
}
