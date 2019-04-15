var vid;
let threshold=25;
let colorTracker= rgb(255, 0, 0);
function setup() {
  noCanvas();

  vid = createVideo(
    ['car.mp4'],
    vidLoad
  );
  vid.size(320, 240);
}

// This function is called when the video loads
function vidLoad() {
  vid.loop();
  vid.volume(0);
}

function draw(){
let closestX=0;
let closestY=0;
let worldRecord = 500;
let count =0;
  for(let x =0;x<vid.width;x++){
    for(let y=0;y<vid.heigth;y++){
      let loc = x+y*vid.width;
      let currentColor= video.pixel[loc]
      let r1 = red(currentColor);
      let g1 = green(currentColor);
      let b1 = blue(currentColor);
      let r2 = red(colorTracker);
      let g2 = green(colorTracker);
      let b2 = blue(colorTracker);

      let d = dist(r1,g1,b1,r2,g2,b2);

      if(d<worldRecord){
        worldRecord=d;
        point(x,y);
        closestX+=x;
        closestY+=y;
        count++;
      }
    }
  }


}

function mousePressed() {
  let loc = mouseX + mouseY*vid.width;
  trackColor = vid.pixels[loc];
  console.log(red(trackColor));
}
