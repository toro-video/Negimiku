let ending2Reset;

class Ending extends State{
	drawState(){
		image(bg_lacquer,width/2,height/2);
    image(img_finish, width/2, height/2-height/6);
    fill(120);
    textSize(30);
    text("あなたのスコアは、"+ score + "P", width/2, height/2+height/10);
		
		//タイトルへ
    fill(255, 168, 75);
    if (mouseX > width/2-width/4 && mouseX <width/2-width/4+width/2) {
      if (mouseY > height-height/4 && mouseY < height-height/4+height/6) {
        fill(201, 133, 61);
      }
    }
    rect(width/2-width/4, height-height/4, width/2, height/6);
    fill(255);
    textSize(50);
    text("タイトルへ", width/2, height/2+height/4+height/32);
	}
	decideState(){
		if (mouseX > width/2-width/4 && mouseX <width/2-width/4+width/2) {
      if (mouseY > height-height/4 && mouseY < height-height/4+height/6) {
        if (mouseIsPressed) {
          if (score > int(score_checker[5])) {
            stateName = "ranking";
          } else {
						ending2Reset = new Reset();
						ending2Reset.reset();
          }
        }
      }
    }
	}
}