var randomColorR=255;
var randomColorG=255;
var randomColorB=255;
function setup() {
  // create 700px by 700px canvas
	createCanvas(700,700);
	noStroke();
	fill(254, 169, 164)
  //pick colors
	
}
 //draw function happens over and over
function draw() {
  // create background color "magneta"
	background(254, 110, 164);
  // create donut without fill color
	noFill();
	stroke(randomColorR,randomColorB,randomColorG);
	strokeWeight("200");
	ellipse(350,350,500,500);
  //text for word "DONUTS" WITH fill color (shadow)
	fill(255,0,170);
	stroke(255,0,170);
	strokeWeight("20");
	textSize(150);
	textFont("Arial Rounded MT Bold");
	textStyle("BOLD");
	text("DONUTS",25,375);
	textSize(150);
	 //text for word "DONUTS"
	fill(255,230,255);
	stroke(255,204,255);
	strokeWeight("20");
	textFont("Arial Rounded MT Bold");
	textStyle("BOLD");
	text("DONUTS",25,385);
	noFill();
	stroke(255,153,102);
	strokeWeight("20");
	ellipse(mouseX,mouseY,50,50); //orange donut will change color of big powdered donut
	//small donuts move around
	stroke(255,204,153);
	strokeWeight("10");
	ellipse(random(width),random(height),40,40); //plain donut
	stroke(153,102,51);
	strokeWeight("10");
	ellipse(random(width),random(height),35,35); //chocolate donut
	stroke(255,179,230);
	strokeWeight("10");
	ellipse(random(width),random(height),30,30); //strawberry donut
	stroke(255,255,255);
	strokeWeight("10");
	ellipse(random(width),random(height),25,25); //strawberry donut
	console.log(randomColorR,randomColorG,randomColorB)
}
function mousePressed(){
	randomColorR = random(155,255);
	randomColorG = random(155,255);
	randomColorB = random(155,255);
}