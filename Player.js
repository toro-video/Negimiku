let x;// = width/2
let y;// = height-50
let pSpeed;// = 3.0

class Player{
	
	constructor(posX,playerSpeed){
		this.x = posX;
		this.speed = playerSpeed;
	}
	
	//getX
	getPlayerX(){
		this.x = x;
	}
	
	keyPressed(){
		image(img_miku, x, y);
		
		//move_configuration
		if (keyCode === RIGHT_ARROW) {
			this.x += this.speed;
		} else if (keyCode === LEFT_ARROW) {
			this.x -= this.speed;
		}
	
		//move_limit
		if (this.x < 50) {
			this.x=50;
		} else if (this.x > width-50) {
			this.x=width-50;
		}
		
  }//keyPressed_end
	
	//setX
	setPlayerX(){
		x = this.x;
	}
	
}