class Title extends State {
    drawState(){
	background(220, 255, 254);
	image(bg_leef,width/2,height/2-height/8);
	imageMode(CENTER);
    	image(img_logo, width/2, height/2-height/16);
    	fill(250, 151, 45);
    	textSize(50);
    	text("sキーを押してね！", width/2, height - height/3);
	push();
	fill(30);
	textSize(20);
	text("※押せない時は、画面をクリックしてからsキーを押してね", width/2, height/2+height/3);
	pop();
    }
	
    decideState(){
	if (keyIsPressed && key == 's') {
		stateName = "select";
	}
    }
}
