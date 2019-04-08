let width;
let height;
let object1;
let object2;
let object3;

function setup() {
  width = 1000;
  height = 1000;
  angleMode(DEGREES);
  frameRate(60);
  createCanvas(width,height);

  // object1 = new body(1000,-200, -200, 0, 0,"0,153,255");
  // object3 = new body(1000, 200, -400, -2,0,"0,255,0");
  // object2 = new body(1000, 0, 0, 2, 0,"255, 0, 0");
  //
  // object1 = new body(1000,-100, -100, 2,-2,"0,153,255");
  // object3 = new body(500, 100, -100, -1,1,"0,255,0");
  // object2 = new body(1000, 0, 0, 2, 2,"255, 0, 0");
  //
  // object1 = new body(100,-100, -100, 2,-2,"0,153,255");
  // object3 = new body(100, 100, -100, 2,2,"0,255,0");
  // object2 = new body(5000, 0, 0, 0, 0,"255, 0, 0");
  // object1 = new body(100,-200, -200, 3,-3,"0,153,255");
  // object3 = new body(100, 100, -100, 3,3,"0,255,0");
  // object2 = new body(5000, 0, 0, 0, 0,"255, 0, 0");
  //
  // object1 = new body(100,-200, -200, 3,-3,"0,153,255");
  // object3 = new body(100, 100, -100, 4,4,"0,255,0");
  // object2 = new body(8000, 0, 0, 0, 0,"255, 0, 0");
  //
  // object1 = new body(100,-200, -200, 3,-3,"0,153,255");
  // object3 = new body(100, 100, -100, 4,4,"0,255,0");
  // object2 = new body(10000, 0, 0, -0.08, 0,"255, 0, 0");

  //eventually circular path
  // object1 = new body(100,-200, -200, 10,-10,"0,153,255");
  // object3 = new body(100, 100, -100, 14,14,"0,255,0");
  // object2 = new body(100000, 0, 0, -0.02, 0,"255, 0, 0");

  object1 = new body(100,-200, -200, 3,-3,"0,153,255");
  object3 = new body(100, 100, -100, 4,4,"0,255,0");
  object2 = new body(10000, 0, 0, -0.08, 0,"255, 0, 0");
}

function draw() {
  background(230);
  translate(width/2, height/2);
  line(0,height/2,0,-height/2);
  stroke(0);
  line(-width/2,0,width/2,0);
  stroke(0);

  object1.update();
  object2.update();
  object3.update();
  object1.calculate_Force(object2);
  object1.calculate_Force(object3);
  object2.calculate_Force(object1);
  object2.calculate_Force(object3);
  object3.calculate_Force(object1);
  object3.calculate_Force(object2);

  if(object1.path.length > 200){
    object1.path.shift();
  }
  for (var i = 0; i < object1.path.length; i++) {
    ellipse(object1.path[i][0], object1.path[i][1],3,3);
    fill(object1.color[0], object1.color[1], object1.color[2]);
  }

  if(object2.path.length > 200){
    object2.path.shift();
  }
  for (var i = 0; i < object2.path.length; i++) {
    ellipse(object2.path[i][0], object2.path[i][1],3,3);
    fill(object2.color[0], object2.color[1], object2.color[2]);
  }

  if(object3.path.length > 200){
    object3.path.shift();
  }
  for (var i = 0; i < object3.path.length; i++) {
    ellipse(object3.path[i][0], object3.path[i][1],3,3);
    fill(object3.color[0], object3.color[1], object3.color[2]);
  }
  //console.log(frameCount);

  // x = amplitude * sin((frameCount / period)* TWO_PI);
  //
  // fill(127);
  // stroke(0);
  // strokeWeight(4);
  // line(amplitude,0,x,0);
  // stroke(230);
  // line(-amplitude,0,x,0);
  // ellipse(x,y,50,50);
}






// var x = 0;
// var y = 0;
// let width;
// let height;
//
// var amplitude = 300;
// var period = 200;
//
// function setup() {
//   width = 800;
//   height = 800;
//   frameRate(60);
//   createCanvas(width,height);
// }
//
// function draw() {
//   // put drawing code here
//   translate(width/2, height/2);
//   background(255);
//
//   x = amplitude * sin((frameCount / period)* TWO_PI);
//
//   fill(127);
//   stroke(0);
//   strokeWeight(4);
//   line(amplitude,0,x,0);
//   stroke(230);
//   line(-amplitude,0,x,0);
//   ellipse(x,y,50,50);
// }
