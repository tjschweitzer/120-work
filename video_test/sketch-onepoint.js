
var video;

var vScale = 1;
var rLimit=220;
var gLimit=100;
var bLimit=100;
var record;
var distance = 20;

function setup() {
  createCanvas(320, 240);
  pixelDensity(1);
  video = createVideo(
    ['media/DSC_0018.mp4'],
    vidLoad
  );
  video.size(width / vScale, height / vScale);
  // video.hide();
}

// This function is called when the video loads
function vidLoad() {
  video.loop();
  video.volume(0);
}

function draw() {
  var nearX=0;
  var nearY=0;
  threhold=25;
  counter=0;
  background(0,0,0,35);
  video.loadPixels();
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = ( x  + (y * video.width)) * 4;
      var r = video.pixels[index + 0];
      var g = video.pixels[index + 1];
      var b = video.pixels[index + 2];
      var bright = (r + g + b) / 3;

      noStroke();
      fill(r,g,b);
      // rect(x*vScale,y*vScale,vScale,vScale);

      distance = distSqr(r,g,b,rLimit,gLimit,bLimit);

      rectMode(CENTER);
      if (threhold*threhold>distance){
        counter=counter+1;
        nearX=nearX+x;
        nearY=nearY+y;
        // ellipse(nearX*vScale,nearY*vScale,20,20);
      }
    }
  }
  nearX=nearX/counter;
  nearY=nearY/counter;
  fill(rLimit,gLimit,bLimit);
  ellipse(nearX*vScale,nearY*vScale,10,10);
  // video.updatePixels();
}

function mousePressed(){
  console.log(mouseX,mouseY);
  let loc = mouseX + mouseY* video.width;
  rLimit=video.pixels[loc];
  gLimit=video.pixels[loc+1];
  bLimit=video.pixels[loc+2]
}

function distSqr(x1,x2,y1,y2,z1,z2){
  let newdist = (x1-x2)*(x1-x2)+(y1-y2)*(y1-y2)+(z1-z2)*(z1-z2);
  return newdist;
}
