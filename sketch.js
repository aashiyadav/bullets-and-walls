var bullet, wall, thickness;
var speed, weight;


function setup() {
  createCanvas(1600,400);
  wall=createSprite(1200, 200, thickness, 100);
  wall.shapeColor=color(80,80,80);
  bullet=createSprite(700,200,100,20);
  bullet.shapeColor=("white");
  speed=random(220,320);
  weight=random(30,50);
  thickness=random(20,85);
  
}

function draw() {
  background(204,255,255); 
  bulletvelocityX=speed;
  wall.debug=true;
  bullet.debug=true;


if (hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage =0.5 * weight * speed * speed/(thickness * thickness * thickness);
  if (damage>10){
    wall.shapeColor=color(255,0,0);
  }
  if (damage<10){
    wall.shapeColor=color(0,255,0);
  }
} 
function hasCollided(lbullet,lbullet){
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true
  }
return false;
}
drawSprites();
}