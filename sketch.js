var hr = hour();
var mn = minute();
var sc = second();
var scAngle, hrAngle, mnAngle;


function setup() {
  createCanvas(400,400);
  createSprite(400, 200, 50, 50);

  
  }

function draw() {
  background(0,0,0);  

  

  let hr = hour();
  angleMode(DEGREES);
  //text('Current hour:\n' + hr, 5, 50);
  hrAngle= map(hr,0,60,0,360);

    push();
    translate(200,200);
    rotate(-90);
    rotate(hrAngle)
    stroke(0,128,128);
    strokeWeight(8);
    line(0,0,80,0);
    pop();


  let mn = minute();
  angleMode(DEGREES);
   mnAngle = map(mn,0,60,0,360);
  
   
   
  push();
   translate(200,200);
   rotate(-90);
   rotate(mnAngle)
   stroke(0,35,102);
   strokeWeight(7);
   line(0,0,125,0);
   pop();

   

  let sc = second();
  angleMode(DEGREES);
  arc(300,200, 20, 20, 0, 360, sc);
  noFill()
    scAngle = map(sc,0,60,0,360);
   
push()
    translate(200,200);
    rotate(-90)
    rotate(scAngle);
    stroke(255,0,0);
    strokeWeight(5);
    line(0,0,125,0);
    pop();
            
  drawSprites();
}