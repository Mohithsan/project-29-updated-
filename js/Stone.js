class Stone {

    constructor(x, y, w,h) 
    {
      let options = {
       
     restitution:0.8
      };
      
      this.body = Bodies.rec(x, y, w, h, options);
      this.w = w;
      this.h = h;
      this.color = color;
      World.add(world, this.body);
    }
  
    show() {
      let pos = this.body.position;
      push();
      
      noStroke();
      fill("white");
      translate(pos.x,pos.y);
      rectMode(CENTER);
      rect(0,0,this.w, this.h);
      pop();
    }
  }
  