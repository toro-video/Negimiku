let pluspoint;//The point of leek at Each difficulty

class DifficultySelect extends State {
  drawState() {
    image(bg_lacquer, width / 2, height / 2);
    textSize(50);
    fill(0);
    text("難しさを選んでね", width / 2, height / 10);

    //easyボタンの設定
    fill(73, 167, 99);
    if (mouseX > width / 2 - width / 4 && mouseX < width / 2 - width / 4 + width / 2) {
      if (mouseY < height / 4 + height / 6 && mouseY > height / 4) {
        fill(103, 255, 145);
      }
    }
    rect(width / 2 - width / 4, height / 4, width / 2, height / 6);
    fill(255);
    text("Easy", width / 2, height / 4 + height / 32);

    //normalボタンの設定
    fill(73, 163, 167);
    if (mouseX > width / 2 - width / 4 && mouseX < width / 2 - width / 4 + width / 2) {
      if (mouseY > height / 2 && mouseY < height / 2 + height / 6) {
        fill(103, 233, 255);
      }
    }
    rect(width / 2 - width / 4, height / 2, width / 2, height / 6);
    fill(255);
    text("Normal", width / 2, height / 2 + height / 32);

    //hardボタンの設定
    fill(211, 79, 88);
    if (mouseX > width / 2 - width / 4 && mouseX < width / 2 - width / 4 + width / 2) {
      if (mouseY > height - height / 4 && mouseY < height - height / 4 + height / 6) {
        fill(255, 106, 116);
      }
    }
    rect(width / 2 - width / 4, height - height / 4, width / 2, height / 6);
    fill(255);
    text("Hard", width / 2, height / 2 + height / 4 + height / 32);

    //ルール
    textSize(30);
    fill(230, 150, 39);
    if (mouseX > width - width / 5 && mouseX < width - width / 40) {
      if (mouseY > 0 && mouseY < height / 20) {
        fill(255, 185, 44);
      }
    }
    text("ルール", width - width / 10, 0);
  }

  decideState() {
    //ルール
    if (mouseX > width - width / 5 && mouseX < width - width / 40) {
      if (mouseY > 0 && mouseY < height / 20) {
        if (mouseIsPressed) {
          stateName = "explain1";
        }
      }
    }

    //難易度easy
    if (mouseX > width / 2 - width / 4 && mouseX < width / 2 - width / 4 + width / 2) {
      if (mouseY < height / 4 + height / 6 && mouseY > height / 4) {
        if (mouseIsPressed) {
          pluspoint = 100;
          stateName = "game";
        }
      }
    }//[easy] if_end

    //難易度normal
    if (mouseX > width / 2 - width / 4 && mouseX < width / 2 - width / 4 + width + 2) {
      if (mouseY > height / 2 && mouseY < height / 2 + height / 6) {
        if (mouseIsPressed) {
          pluspoint = 400;
          poisonusLeekSpeed = 3.0;
          poisonusLeekInc = 10;
          stateName = "game";
        }
      }
    }//[normal] if_end

    //難易度hard
    if (mouseX > width / 2 - width / 4 && mouseX < width / 2 - width / 4 + width / 2) {
      if (mouseY > height - height / 4 && mouseY < height - height / 4 + height / 6) {
        if (mouseIsPressed) {
          pluspoint = 1000;
          poisonusLeekSpeed = 10.0;
          poisonusLeekInc = 1000;
          stateName = "game";
        }
      }
    }//[hard] if_end

  }//decideState_end

}//difficultySelect_end