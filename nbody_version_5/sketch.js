let width;
let height;
let depth;
let objects = [];
//let angle = 0.01;

function setup() {
  width = windowWidth;
  height = windowHeight;
  //angleMode(DEGREES);
  frameRate(60);
  //createCanvas(windowWidth,windowHeight,WEBGL);
  createCanvas(width,height,WEBGL);

  objects.push(new body(15000,1000,0,0,0));
  //objects[0].setColor("random");
  objects.push(new body(300,20,200,200,200));
  objects[1].setVelocity(-2,2,4);
  objects.push(new body(200,40,-200,-200,-200));
  objects[2].setVelocity(-2,2,4);
  objects.push(new body(200,40,-200,-200,200));
  objects[3].setVelocity(2,0,2);
  objects.push(new body(200,40,0,0,-400));
  objects[4].setVelocity(0,-5,0);

  objects.push(new body(100,30,400,0,0));
  objects[5].setVelocity(0,-4,0);

  objects.push(new body(1100,30,700,700,700));
  objects[6].setVelocity(-3,0,0);

  objects.push(new body(200,30,700,800,800));
  objects[7].setVelocity(-4,0,0);

  objects[0].setColor("255, 255, 77");
  objects[1].setColor("random");
  objects[2].setColor("random");
  objects[3].setColor("random");
  objects[4].setColor("random");
  objects[5].setColor("random");
  objects[6].setColor("random");
  objects[7].setColor("random");


  //objects.push(new body(200,1000,-300,200,-200));
  //objects[2].setVelocity(2,2,4);


  //objects[1].setColor("random");

}

function draw() {
  background(0);
  orbitControl();
  //debugMode(AXES);
  //pointLight(255,255,255,1,0,0);
  translate(objects[0].position.x,objects[0].position.y,objects[0].position.z);
  pointLight(255,255,255,objects[0].position.x,objects[0].position.y,objects[0].position.z);
  pointLight(255,255,255,objects[0].position.x,objects[0].position.y,objects[0].position.z);
  pointLight(255,255,255,objects[0].position.x,objects[0].position.y,objects[0].position.z);
  pointLight(255,255,255,objects[0].position.x,objects[0].position.y,objects[0].position.z);
  pointLight(255,255,255,objects[0].position.x,objects[0].position.y,objects[0].position.z);
  pointLight(255,255,255,objects[0].position.x,objects[0].position.y,objects[0].position.z);
  pointLight(255,255,255,objects[0].position.x,objects[0].position.y,objects[0].position.z);
  pointLight(255,255,255,objects[0].position.x,objects[0].position.y,objects[0].position.z);
  pointLight(255,255,255,objects[0].position.x,objects[0].position.y,objects[0].position.z);

  //ambientLight(255);
  //directionalLight(255, 1, 0, 0);

  //translate(mouseX - (width/2),mouseY  - (height/2), 0);
  //line(x1, y1, z1, x2, y2, z2);
  push();
  //translate(0,0,0);
  // rotateX(PI/6);
  // rotateY(PI/6 -0.15);
  //debugMode();
  // var v = createVector(1,1,1);
  // v.normalize();
  // directionalLight(255, 255, 255,v);
  //rotateZ(PI/6);

  /*
  stroke(255,0,0);
  line(-10000,0,0,10000,0,0);
  stroke(0,255,0);
  line(1,-10000,0,0,10000,0);
  stroke(0,0,255);
  line(0,0,-10000,0,0,10000);
  */

  // rotateY(40);
  // rotateX(40);
  // ortho();
  noStroke();
  //camera(0,0,0,0,0,0,0,1,0);
  //translate(width/2, height/2);
  // line(0,height/2,0,-height/2);
  // stroke(0);
  // line(-width/2,0,width/2,0);
  // stroke(0);

  //fill(0);
  for (var j = 0; j < objects.length; j++) {
    objects[j].update();
  }

  for (var i = 0; i < objects.length; i++) {
    for (var j = 0; j < objects.length; j++) {
      objects[i].calculate_Force(objects[j]);
    }
    if(objects[i].path.length > 200){
      objects[i].path.shift();
    }
  }
  objects[0].updateColor();

  pop();

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//
// objects.push(new body(15000,1000,0,0,0));
// //objects[0].setColor("random");
// objects.push(new body(100,40,200,200,200));
// objects[1].setVelocity(-2,2,4);
// objects.push(new body(200,40,-200,-200,-200));
// objects[2].setVelocity(-2,2,4);
// objects.push(new body(200,40,-200,-200,200));
// objects[3].setVelocity(2,0,2);
// objects.push(new body(200,40,0,0,-300));
// objects[4].setVelocity(0,-4,0);
//
//
// objects[0].setColor("255, 255, 77");
// objects[1].setColor("random");
// objects[2].setColor("random");
// objects[3].setColor("random");
// objects[4].setColor("random");
