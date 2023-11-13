let goldLeekX;
let goldLeekY;
let goldLeekSpeed;

class GoldLeek{
	
	constructor(playerX, playerY){
		this.x = playerX;
		this.y = playerY;
	}
	
	//gold_leek
	goldLeek(){
		imageMode(CENTER);
		image(img_goldleek, goldLeekX, goldLeekY, 70, 70);
		if(goldLeekY <= -50){
			goldLeekX = random(width/4, width-width/4);
		}
		if (score >= 1000) {
			goldLeekY += goldLeekSpeed;
		}
	}

	//gold leek collision
	goldLeekCollision(){
		if (this.x - 50 < goldLeekX && this.x + 50 > goldLeekX) {
			if (this.y - 50 < goldLeekY && this.y + 50 > goldLeekY) {
				score *= 2;
				goldLeekY = -2300;
				if (goldLeekY <= -50) {
					goldLeekX = random(width/4, width-width/4);
				}
			}
		}
	}

}