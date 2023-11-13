let ex_count;

class Ex2 extends State {
	drawState(){
		textSize(50);
    fill(39, 214, 28);
		text("アイテムの説明", width/2, 30);

    image(img_leek, width/2-width/4, height/2-height/4, 100, 100);
    fill(0);
    textSize(20);
    text("普通のねぎ", width/2-width/4, height/2-height/6);
    textSize(15);
    text("取るとスコアが増えるよ", width/2-width/4, height/2-height/8);

    image(img_goldleek, width/2+width/4, height/2-height/4, 100, 100);
    textSize(20);
    text("金のねぎ", width/2+width/4, height/2-height/6);
    textSize(15);
    text("取るとスコアが倍になるよ", width/2+width/4, height/2-height/8);

    image(img_p_leek, width/2-width/4, height/2+height/10, 125, 125);
    textSize(20);
    text("毒入りのねぎ", width/2-width/4, height/2+height/5);
    textSize(15);
    text("取るとスコアが半分に…", width/2-width/4, height/2+height/4);

    image(img_can, width/2+width/4, height/2+height/10);
    textSize(20);
    text("スピードアップ缶", width/2+width/4, height/2+height/5);
    textSize(15);
    text("取ると移動速度が上がるよ", width/2+width/4, height/2+height/4);
		
		textSize(30);
		fill(150);
    if (mouseX > width-width/2.5 && mouseX < width) {
      if (mouseY > height-height/10 && mouseY < height-height/20) {
        fill(0);
      }
    }
    text("難易度選択へ戻る", width-width/5, height-height/10);
		
		image(arrow, 25, 10, 50, 50);
    if (mouseX > 0 && mouseX < 50) {
      if (mouseY > 0 && mouseY < 25) {
        tint(200);
        image(arrow, 25, 10, 50, 50);
        noTint();
      }
    }
	}//drawState_end
	
	decideState(){
		ex_count++;
		if(ex_count >= 50){
			isEx2 = false;
		}
		if (mouseX > width-width/2.5 && mouseX < width) {
      if (mouseY > height-height/10 && mouseY < height-height/20) {
        if (mouseIsPressed) {
					if(isEx2 == false){
						ex_count = 0;
            stateName = "select";
					}
        }
      }
    }

    if (mouseX > 0 && mouseX < 50) {
      if (mouseY > 0 && mouseY < 25) {
        if (mouseIsPressed) {
					ex_count = 0;
          stateName = "explain1";
        }
      }
    }
	}//decideState_end
	
}//class 'ex2' end