let isEx2;

class Ex1 extends State {
	drawState(){
		textSize(50);
    fill(39, 214, 28);
		text("ルール説明", width/2, 30);
    textSize(30);
    fill(40);
    text("矢印キーでミクを左右に動かして", width/2, height/5);
    text("ミクにねぎをゲットさせよう", width/2, height/3);
    image(img_leek, width/2-width/4, height/2+height/30, 100, 100);
    image(img_miku, width/2-width/4, height/2+height/4);
    text("→", width/2, height/2+height/10);
    image(img_get, width/2+width/4, height/2+height/15);
    image(img_miku, width/2+width/4, height/2+height/4);
		
		//次の説明へ
    fill(150);
    if (mouseX > width-width/6 && mouseX < width-width/30) {
      if (mouseY > height-height/10 && mouseY < height-height/30) {
        fill(0);
      }
    }
    textSize(30);
    text("つぎへ", width-width/10, height-height/10);
		
	}//drawState_end
	
	decideState(){
		if (mouseX > width-width/6 && mouseX < width-width/30) {
      if (mouseY > height-height/10 && mouseY < height-height/30) {
        if (mouseIsPressed) {
					isEx2 = true;
          stateName = "explain2";
        }
      }
    }//if_3_end
	}//decideState_end
	
}//class 'ex1' end