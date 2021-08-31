class Ground {

  constructor(x, y, w,h,color,isStatic) 
  {
    let options = {
     isStatic:false
    };
    
    this.body = Bodies.rectangle(x, y, w, h, color, options);
    this.w = w;
    this.h = h;
    this.color = color;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    push();
    rectMode(CENTER);
    noStroke();
    fill(this.color);
    rect(pos.x,pos.y, this.w, this.h);
    pop();
  }
}
