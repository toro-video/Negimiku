let x;// = width/2
let y;// = height-50
let pSpeed;// = 3.0

class Player {

	constructor(posX, playerSpeed) {
		this.x = posX;
		this.speed = playerSpeed;
	}

	//getX
	getPlayerX() {
		this.x = x;
	}

	keyPressed() {
		image(img_miku, x, y);

		//move_configuration
		if (keyCode === RIGHT_ARROW) {
			this.x += this.speed;
		} else if (keyCode === LEFT_ARROW) {
			this.x -= this.speed;
		}

		//move_limit
		if (this.x < 50) {
			this.x = 50;
		} else if (this.x > width - 50) {
			this.x = width - 50;
		}
<<<<<<< HEAD:scripts/Player.js

	}//keyPressed_end

=======
		
  	}//keyPressed_end
	
>>>>>>> bf373cdd672f488e7c9a7598f2247ab9b9564123:Player.js
	//setX
	setPlayerX() {
		x = this.x;
	}
<<<<<<< HEAD:scripts/Player.js

}
=======
	
}
>>>>>>> bf373cdd672f488e7c9a7598f2247ab9b9564123:Player.js
