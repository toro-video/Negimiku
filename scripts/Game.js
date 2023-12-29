let t;
const limitTime = 3100;

let score;

let player;
let leekObject;
let goldLeekObject;
let poisonusLeekObject;
let speedUpCanObject;
let getEffect;

class Game extends State {
	drawState() {
		background(255);
		imageMode(CENTER);
		image(img_bg, width / 2, height / 2);

		t--;

		player = new Player(x, pSpeed);
		leekObject = new Leek(x, y, leekX, leekY, leekObjectSpeed);
		goldLeekObject = new GoldLeek(x, y);
		poisonusLeekObject = new PoisonusLeek(x, y);
		speedUpCanObject = new SpeedUpCan(x, y);
		getEffect = new GetEffect();

		if (t < limitTime && t > limitTime - 100) {
			image(img_miku, x, y);
			//score
			fill(255, 249, 57);
			textSize(20);
			text("スコア:" + score, width / 2, 0);
			textSize(100);
			fill(0, 200, 0);
			text("START", width / 2, height / 2);
		}

		if (t <= limitTime) {
			player.getPlayerX();
			player.keyPressed();
			player.setPlayerX();

			leekObject.leek();
			leekObject.collisionDetection();

			goldLeekObject.goldLeek();
			goldLeekObject.goldLeekCollision();

			poisonusLeekObject.poisonLeek();
			poisonusLeekObject.pLeekCollision();

			speedUpCanObject.speedCan();
			speedUpCanObject.speedCanCollision();

			getEffect.getLeekEffect();

			//score
			fill(255, 249, 57);
			textSize(20);
			text("スコア:" + score, width / 2, 0);

			//pause
			image(pause_mark, width - width / 13, 50, 50, 50);
			if (mouseX > (width - width / 13) - 25 && mouseX < (width - width / 13) + 25) {
				if (mouseY > 25 && mouseY < 75) {
					push();
					tint(50);
					image(pause_mark, width - width / 13, 50, 50, 50);
					pop();
				}
			}
			fill(255);
			textSize(20);
			text("time:" + int(t / 100), 40, 40);
		}
	}

	decideState() {
		if (mouseX > (width - width / 13) - 25 && mouseX < (width - width / 13) + 25) {
			if (mouseY > 25 && mouseY < 75) {
				if (mouseIsPressed) {
					pause_time = t;
					stateName = "pauseState";
				}
			}
		}
		if (t <= 100) {
			stateName = "ending";
		}
	}
}//game class end