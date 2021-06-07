class Polygon{
    constructor(x, y, width, height){
      var options = {
        'restitution':0.8,
        'friction':0.5,
        'density':0.5
    }

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.polygon_image = loadImage("polygon_image.png");
    World.add(world, this.body);
 
}

display(){
  var angle = this.body.angle;
  push();
  translate(this.body.position.x, this.body.position.y);
  imageMode(CENTER);
  image(this.polygon_image, 0,0, this.width, this.height);
  pop();
}


};
