class body{

  constructor(object_mass, density, posx, posy, posz){
    this.mass = object_mass;
    //p = m/v
    //v = m/p
    this.density = density;
    this.size = object_mass / density;
    this.color;
    this.velocity = createVector(0,0,0);
    this.position = createVector(posx,posy,posz);
    this.acceleration = createVector(0,0,0);
    this.force = createVector(0,0,0);
    this.path = [];
  }
  setColor(color){
    if (color === "random") {
      this.color = [];
      this.color.push(Math.floor(Math.random() * 256));
      this.color.push(Math.floor(Math.random() * 256));
      this.color.push(Math.floor(Math.random() * 256));
    }else{
      this.color = color.split(",");
    }
  }
  setVelocity(velx,vely,velz){
    this.velocity = createVector(velx,vely,velz);
  }
  update(){
    this.path.push([this.position.x,this.position.y,this.position.z]);

    this.acceleration = this.force.div(this.mass);
    this.velocity = this.velocity.add(this.acceleration);
    this.position = this.position.add(this.velocity);
    push();
    rotateX(PI/6);
    rotateY(PI/6 -0.15);
    translate(this.position.x,this.position.y,this.position.z);
    ambientMaterial(this.color[0],this.color[1],this.color[2]);
    sphere(this.size);
    pop();

    //ellipse(this.position.x, this.position.y, this.size, this.size);
    // track
    for (var a = 0; a < this.path.length; a++) {
      push();
      rotateX(PI/6);
      rotateY(PI/6 -0.15);
      translate(this.path[a][0], this.path[a][1],this.path[a][2]);
      fill(this.color[0],this.color[1],this.color[2]);
      sphere(1);
      pop();
      //fill(this.color[0], this.color[1], this.color[2]);
    }
    //fill(this.color[0], this.color[1], this.color[2]);

    this.force.x = 0;
    this.force.y = 0;
  }
  calculate_Force(object){
    //f = Gm1m2/r^2
    var r = sqrt(pow(this.position.x - object.position.x,2) + pow(this.position.y - object.position.y,2) + pow(this.position.z - object.position.z,2));
    var obj1_to_obj2 = createVector(object.position.x - this.position.x, object.position.y - this.position.y, object.position.z - this.position.z);
    var acceleration = createVector((object.mass * obj1_to_obj2.x) / pow(r,3), (object.mass * obj1_to_obj2.y) / pow(r,3), (object.mass * obj1_to_obj2.z) / pow(r,3));
    var force = createVector(acceleration.x * this.mass , this.mass * acceleration.y, this.mass * acceleration.z);
    this.force = this.force.add(force);
    //this.acceleration = acceleration;
    //console.log(this.acceleration.mag());
  }

}
