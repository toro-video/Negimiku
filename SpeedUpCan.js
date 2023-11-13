let speedCanX;
let speedCanY;

class SpeedUpCan{
	constructor(playerX, playerY){
		this.x = playerX;
		this.y = playerY;
	}
	
	//speed up can
	speedCan(){
		image(img_can, speedCanX, speedCanY);
		if (t > 0 && t <= 1600 && pSpeed == 3.0) {
			speedCanX = width - 50;
		}
	}

	//can collision
	speedCanCollision(){
		if (t <= 1600 && pSpeed == 3.0) {
			if (this.x - 50 < speedCanX && this.x + 50 > speedCanX) {
				if (this.y - 50 < speedCanY && this.y + 50 > speedCanY) {
					pSpeed *= 2;
					speedCanX = width+50;
				}
			}
		}
	}
}