let goldLeekX;
let goldLeekY;
let goldLeekSpeed;

class GoldLeek {

	constructor(playerX, playerY) {
		this.x = playerX;
		this.y = playerY;
	}

	//gold_leek
	goldLeek() {
		imageMode(CENTER);
		image(img_goldleek, goldLeekX, goldLeekY, 70, 70);
		if (goldLeekY <= -50) {
			goldLeekX = random(width / 4, width - width / 4);
		}
		if (score >= 1000) {
			goldLeekY += goldLeekSpeed;
		}
	}

	//gold leek collision
	goldLeekCollision() {
		if (this.x - 50 < goldLeekX && this.x + 50 > goldLeekX) {
<<<<<<< HEAD:scripts/GoldLeek.js
			if (this.y - 50 < goldLeekY && this.y + 50 > goldLeekY) {
				score *= 2;
				goldLeekY = -2300;
				if (goldLeekY <= -50) {
					goldLeekX = random(width / 4, width - width / 4);
				}
=======
		  if (this.y - 50 < goldLeekY && this.y + 50 > goldLeekY) {
			score *= 2;
			goldLeekY = -2300;
			if (goldLeekY <= -50) {
				goldLeekX = random(width/4, width-width/4);
>>>>>>> bf373cdd672f488e7c9a7598f2247ab9b9564123:GoldLeek.js
			}
		  }
		}
	}

}
