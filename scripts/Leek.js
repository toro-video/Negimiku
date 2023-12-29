let leekX;// = LeekXArray
let leekY;// = LeekYArray
let leekObjectSpeed;// = 5.0;

class Leek {
	constructor(playerX, playerY, leekArrayX, leekArrayY, leekSpeed) {
		this.x = playerX;
		this.y = playerY;
		this.leekX = leekArrayX;
		this.leekY = leekArrayY;
		this.lspeed = leekSpeed;
	}

	//leek
	leek() {
		for (let i = 0; i < 15; i++) {
			this.leekX[i] = 25 + i * width / 15;
			this.leekY[i] += this.lspeed;
			image(img_leek, this.leekX[i], this.leekY[i], 50, 50);
		}
		if (random(1000) < 20) {
			for (let i = 0; i < 15; i++) {
				if (this.leekY[i] > height + 25) {
					this.leekY[i] = random(-500, -25);
				}
			}
		}
	}

	//leek_collision
	collisionDetection() {
		c = score;//For effect
		for (let i = 0; i < 15; i++) {
			if (this.x - 50 < this.leekX[i] && this.x + 50 > this.leekX[i]) {
				if (this.y - 50 < this.leekY[i] && this.y + 50 > this.leekY[i]) {
					score = score + pluspoint;
					this.leekY[i] = random(-500, -25);//relocation
				}
			}
		}
	}


}