var wall;
var car;
var speed;
var weight;
var deformation;

function setup() {
  createCanvas(800,400);
  wall = createSprite(775, 200, 50, 200);
  car = createSprite(100, 200, 50, 20)
  speed = random(45, 60)
  weight = random(1500, 3000)
  deformation = 0.5 * weight * speed * speed/22500;
  car.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  
  if (deformation < 100 ) {
    car.shapeColor = "green";
  }

  if (deformation >= 100 && deformation <= 180) {
    car.shapeColor = "yellow";
  }

  if (deformation > 180 ) {
    car.shapeColor = "red";
  }
  
  if (isTouching(car, wall)) {
  car.velocityX = 0;
  }
  text(deformation, 300, 300)
  drawSprites();
}