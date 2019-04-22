class Blob{
  constructor(x,y){
    this.minx=x;
    this.miny=y;
    this.maxx=x+5;
    this.maxy=y+5;

  }

  frame(volNum){
    let greenVolNum = map(volNum+.2,0,1,0,255);
    let redVolNum = map(volNum,0,1,255,178);
    let blueVolNum = map(volNum,1,0,0,128);
    fill(redVolNum, greenVolNum, blueVolNum);
    noStroke();

    ellipse(this.minx*vScale,this.miny*vScale,this.maxx*vScale-this.minx*vScale,this.maxy*vScale-this.miny*vScale);
  }

  addpoint(x,y){
    this.minx=min(this.minx,x);
    this.miny=min(this.miny,y);
    this.maxx=max(this.maxx,x);
    this.maxy=max(this.maxy,y);
    // console.log('point added');
  }

  blobSize(){
    return (this.maxx-this.minx)*(this.maxy-this.miny);
  }

  isNear(x,y){
    let cx = (this.maxx+this.minx)/2;
    let cy = (this.maxy+this.miny)/2;

    let d = distSqr(cx, x, cy, y);
    if (d < distThreshold) {
      return true;
    } else {
      return false;
    }
  }

}
