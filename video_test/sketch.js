
var video;

var vScale = 4;
var rLimit=150;

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  video = createVideo(
    ['testblack.mp4'],
    vidLoad
  );
  video.size(width / vScale, height / vScale);
  video.hide();
}

// This function is called when the video loads
function vidLoad() {
  video.loop();
  video.volume(0);
}

function draw() {
  background(0,0,0,15);
  video.loadPixels();
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = ( x  + (y * video.width)) * 4;
      var r = video.pixels[index + 0];
      var g = video.pixels[index + 1];
      var b = video.pixels[index + 2];
      var bright = (r + g + b) / 3;
      var w = map(bright, 0, 255, 0, vScale);
      noStroke();
      fill(r,g,b);




      rectMode(CENTER);
      if (r>rLimit){
      ellipse(x * vScale, y * vScale, w, w,60);
    }
    }
  }

}
