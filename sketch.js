function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(degrees);
}
let gap = 10;
let cirNum = 40;
let cirSize = 20;
let angle = 0;
let ptNum = 50;
function draw() {
  background('black');
  noCursor();
  noStroke();
  fill('white')
  circle(mouseX, mouseY,5);
  
  push();
  translate(width/2,height/2);
  rotate(angle);
  //angle = map(mouseX,0,width,-1,1);
  angle = angle+map(mouseX,0,width,-0.1,0.1);

  
  noFill();
  stroke('white');
  strokeWeight(1);
  for (let i = 0; i < cirNum; i++){
    arc(0,0,cirSize + gap * i,cirSize + gap * i,angle*i,360-angle/2);
  }
  //almost couldn't get loop to work and i wanted to cry
  //circle(width/2,height/2,50);
  //circle(width/2,height/2,70);
  //circle(width/2,height/2,90);
 

  pop();
  
  //random noise as background
  push();
  stroke('white');
  strokeWeight(1);
  for(let i=0; i<ptNum; i++){
    point(random(width),random(height));  
  }
  pop();
}