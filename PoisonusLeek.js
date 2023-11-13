let poisonusLeekX;
let poisonusLeekY;
let poisonusLeekSpeed;
let poisonusLeekInc;//Incidences

class PoisonusLeek{
	
	constructor(playerX, playerY){
		this.x = playerX;
		this.y = playerY;
	}
	
	//poisonus leek
	poisonLeek(){
		
		if (poisonusLeekY < -50) {
			poisonusLeekX =  random(50, width-50);
		}
		poisonusLeekY += poisonusLeekSpeed;
		image(img_p_leek, poisonusLeekX, poisonusLeekY, 100, 100);
		if (random(1000) < poisonusLeekInc) { //p_Leek incidence
			if (poisonusLeekY > height+25) {
				if (poisonusLeekY < -50) {
					poisonusLeekX =  random(50, width-50);
				}
			poisonusLeekY = random(-200, -25);
			}
		}
	}

	//poisonus leek collision
	pLeekCollision(){
		for (let i = 0; i < 1; i++) {
			if (this.x - 50 < poisonusLeekX - 15 && this.x + 50 > poisonusLeekX + 15) {
				if (this.y - 50 < poisonusLeekY - 25 && this.y + 50 > poisonusLeekY + 25) {
					score /=2;
					poisonusLeekY = random(-200, -25);
				}
			}
		}
	}
}