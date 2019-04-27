

var video;
var song;
var amp;

var rLimit=220;
var gLimit=30;
var bLimit=30;
var showPic=true;

var imgAplha=60;
var distThreshold = 10;
let blobs =[]

// Loads up the song
function preload(){
  song = loadSound("media/Alto.mp3");
}


function setup() {
  createCanvas(1280,720);
  background(0,0,0);
  pixelDensity(1);
  video = createVideo(
    ['media/fiftyspeed.webm'],
    vidLoad
  );
  video.size(width, height);
  song.play();
  song.loop();
  amp = new p5.Amplitude();
}

// This function is called when the video loads
function vidLoad() {
  video.loop();
}


function draw() {
// Black background with a slight alpha
  background(0,0,0,15);
// Removes all the blobs from the array
  blobs.splice(0,blobs.length);
// Hides the video from playing outside the canvas
  video.hide();
// SHows the image of the video if showpic is true
  if(showPic){
    tint(255, imgAplha);
    image(video, 0, 0);
  }

// Gets the volume of the song playing
  let vol = amp.getLevel()

// Loads the pixels of the video
  video.loadPixels();
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = ( x  + (y * video.width)) * 4;
      var r = video.pixels[index + 0];
      var g = video.pixels[index + 1];
      var b = video.pixels[index + 2];

      distance = distSqr(r,g,b,rLimit,gLimit,bLimit);

// checks if the pixel is close enough to the selected color
      if (225>distance){
        let found =false;
// checks if the pixel is close to a blob already selected
        for(let i =0; i<blobs.length;i++){
          if(blobs[i].isNear(x,y)){
            blobs[i].addpoint(x,y)
            found = true;
            break;
          }
        }
// if not found adds new blob to the array
        if(!found){
          let b = new Blob(x,y);
          append(blobs,b);
        }
      }
    }
  }
// Draws the blobs
  for(let i =0; i<blobs.length;i++){
    blobs[i].frame(vol);
  }
}

// shows/hides the video on canvas
function mousePressed(){
  showPic=!showPic;
  video.loop();
  imgAplha=255;
}

// calculates the distance of the pixels
function distSqr(x1,x2,y1,y2,z1,z2){
  let newdist = (x1-x2)*(x1-x2)+(y1-y2)*(y1-y2)+(z1-z2)*(z1-z2);
  return newdist;
}

// calculates the distance of the pixels
function distSqr(x1,x2,y1,y2){
  let newdist = (x1-x2)*(x1-x2)+(y1-y2)*(y1-y2);
  return newdist;
}


// Up and Down will change the distance between the ellipse
// Left and right changes the alpha level of the video
function keyPressed() {
  if (keyCode == UP_ARROW) {
    distThreshold=distThreshold+.25;
      console.log(distThreshold);
  } else if (keyCode == DOWN_ARROW) {
    distThreshold=distThreshold-.25;
      console.log(distThreshold);
  }   else if (keyCode==LEFT_ARROW) {
    if(imgAplha==0){
      showPic=!showPic;
    }
    imgAplha=imgAplha+20;
    imgAplha=map(imgAplha,0,270,0,255,true);
    console.log(imgAplha);
  } else if (keyCode == RIGHT_ARROW) {
    imgAplha=imgAplha-20;
    imgAplha=map(imgAplha,-10,255,0,255,true);
    if(imgAplha==0){
      showPic=!showPic;
    }
      console.log(imgAplha);
  }

}
