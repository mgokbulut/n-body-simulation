let width;
let height;
let objects = [];

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

  // objects.push(new body(100,-200, -200, 3,-3,"0,153,255"));
  // objects.push(new body(100, 100, -100, 4,4,"0,255,0"));
  // objects.push(new body(10000, 0, 0, -0.08, 0,"255, 0, 0"));

  objects.push(new body(100,-200, -200, 3,-3, "random"));
  objects.push(new body(100, 100, -100, 4,4,"random"));
  objects.push(new body(100, 200, 200, -4,4,"random"));
  objects.push(new body(10000, 0, 0, -0.1, -0.01,"random"));
}

function draw() {
  background(230);
  translate(width/2, height/2);
  line(0,height/2,0,-height/2);
  stroke(0);
  line(-width/2,0,width/2,0);
  stroke(0);

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
