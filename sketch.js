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

  object1 = new body(1000,-100, -100, 2,0,"0,153,255");
  object3 = new body(500, 100, -100, -1,0,"0,255,0");
  object2 = new body(1000, 0, 0, 1, 1,"255, 0, 0");
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

  if(object1.path.length > 1000){
    object1.path.shift();
  }
  for (var i = 0; i < object1.path.length; i++) {
    ellipse(object1.path[i][0], object1.path[i][1],3,3);
    fill(object1.color[0], object1.color[1], object1.color[2]);
  }

  if(object2.path.length > 1000){
    object2.path.shift();
  }
  for (var i = 0; i < object2.path.length; i++) {
    ellipse(object2.path[i][0], object2.path[i][1],3,3);
    fill(object2.color[0], object2.color[1], object2.color[2]);
  }

  if(object3.path.length > 1000){
    object3.path.shift();
  }
  for (var i = 0; i < object3.path.length; i++) {
    ellipse(object3.path[i][0], object3.path[i][1],3,3);
    fill(object3.color[0], object3.color[1], object3.color[2]);
  }
  //console.log(frameCount);

}
