
var video;

var vScale = 4;
var rLimit=220;
var gLimit=50;
var bLimit=50;
var distThreshold = 40;
var distance = 40;
let blobs =[]

var amp;
var song;

function preload(){
  song = loadSound("media/Alto.mp3");

}


function setup() {
  createCanvas(1280, 720);
  background(0,0,0);
  pixelDensity(1);
  video = createVideo(
    ['media/third320.mp4'],
    vidLoad
  );
  song.play();
  amp = new p5.Amplitude();

}

// This function is called when the video loads
function vidLoad() {
  video.loop();
  video.volume(0);
}

function draw() {
  blobs.splice(0,blobs.length);

  threhold=15;
  let vol = amp.getLevel()


  background(0,0,0,20);
  video.loadPixels();
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = ( x  + (y * video.width)) * 4;
      var r = video.pixels[index + 0];
      var g = video.pixels[index + 1];
      var b = video.pixels[index + 2];
      var bright = (r + g + b) / 3;

      distance = distSqr(r,g,b,rLimit,gLimit,bLimit);

      if (threhold*threhold>distance){
        let found =false;
        for(let i =0; i<blobs.length;i++){
          if(blobs[i].isNear(x,y)){
            blobs[i].addpoint(x,y)
            found = true;
            break;
          }
        }

        if(!found){
          let b = new Blob(x,y);
          append(blobs,b);
        }
      }
    }
  }
  for(let i =0; i<blobs.length;i++){
    blobs[i].frame(vol);
  }
}

// function mousePressed(){
//   console.log(mouseX,mouseY);
//   let loc = mouseX + mouseY* video.width;
//   rLimit=video.pixels[loc];
//   gLimit=video.pixels[loc+1];
//   bLimit=video.pixels[loc+2]
// }

function distSqr(x1,x2,y1,y2,z1,z2){
  let newdist = (x1-x2)*(x1-x2)+(y1-y2)*(y1-y2)+(z1-z2)*(z1-z2);
  return newdist;
}
function distSqr(x1,x2,y1,y2){
  let newdist = (x1-x2)*(x1-x2)+(y1-y2)*(y1-y2);
  return newdist;
}


// A and Z will change the distance between the ellipse
function keyPressed() {
  if (key == 'a') {
    distThreshold=distThreshold+1;
  } else if (key == 'z') {
    distThreshold=distThreshold-1;
  }
  console.log(distThreshold);
}
