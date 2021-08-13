var bg,snow,snowimg;



function preload() {
    
    bg = loadImage("snow2.jpg");
    snowimg = loadImage("snow4.webp");


}



function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  snow = createSprite(50,50);
  snow.addImage("sn",snowimg);
  snow.scale= 0.1;

  
 

}

function draw() {
  background(bg); 
  
  



  drawSprites();
}