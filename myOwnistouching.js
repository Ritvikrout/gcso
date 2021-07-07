function isTouching(car, wall) {
    if(car.x - wall.x < car.width + wall.width &&
        wall.x - car.x < car.width + wall.width &&
        car.y - wall.y < car.height + wall.height &&
        wall.y - car.y < car.height + wall.height) {
        return true;
    }
    else {
        return false;
    }
}