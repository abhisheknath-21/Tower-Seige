class Block {
      constructor(x, y, width, height){
        var options = {
          'restitution':0.8,
          'friction':0.1,
          'density':0.1
      }

      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
   
  }

  display(){

    if(this.body.position.y < 380 ){
    var angle = this.body.angle;
     push();
    translate(this.body.position.x, this.body.position.y);
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
    }
    else{
       World.remove(world,  this.body);
       push();
       this.visibility= this.visibility-5;
       tint(255, this.visibility)
       rect(0, 0, this.width, this.height );
       pop();
    }

  }


};
