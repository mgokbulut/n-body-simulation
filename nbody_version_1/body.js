class body{

  constructor(object_mass, posx, posy, velx, vely, color){
    this.mass = object_mass;
    this.size = 10;
    this.color = color.split(",");
    this.position = createVector(posx,posy);
    this.velocity = createVector(velx,vely);
    this.acceleration = createVector(0,0);
    this.path = [];
  }
  update(){
    this.path.push([this.position.x,this.position.y]);
    this.velocity = this.velocity.add(this.acceleration);
    this.position = this.position.add(this.velocity);
    ellipse(this.position.x, this.position.y, this.size, this.size);
    fill(this.color[0], this.color[1], this.color[2]);
  }
  calculate_Force(object){
    //f = Gm1m2/r^2
    var r = sqrt(pow(this.position.x - object.position.x,2) + pow(this.position.y - object.position.y,2));
    var obj1_to_obj2 = createVector(object.position.x - this.position.x, object.position.y - this.position.y);
    var acceleration = createVector((object.mass * obj1_to_obj2.x) / pow(r,3), (object.mass * obj1_to_obj2.y) / pow(r,3));
    this.acceleration = acceleration;
    //console.log(this.acceleration.mag());
  }

}
