class Blob{
  constructor(x,y){
    this.minx=x;
    this.miny=y;
    this.maxx=x;
    this.maxy=y;
  }

  frame(volNum){
    let redVolNum = map(volNum,0,1,255,127);
    let blueVolNum = map(volNum,1,0,0,128);
    fill(redVolNum, 0, blueVolNum);
    noStroke();
    ellipse(this.minx,this.miny,this.maxx-this.minx,this.maxy-this.miny);
  }

  addpoint(x,y){
    this.minx=min(this.minx,x);
    this.miny=min(this.miny,y);
    this.maxx=max(this.maxx,x);
    this.maxy=max(this.maxy,y);
  }

  blobSize(){
    return (this.maxx-this.minx)*(this.maxy-this.miny);
  }

  isNear(x,y){
    let cx = (this.maxx+this.minx)/2;
    let cy = (this.maxy+this.miny)/2;
    let d = distSqr(cx, x, cy, y);
    if (d < distThreshold*distThreshold) {
      return true;
    } else {
      return false;
    }
  }
}
