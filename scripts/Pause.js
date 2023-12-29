let pause_checker;//Ispause
let pause_time;
let pause2Reset;

class Pause extends State {
  drawState() {
    image(bg_lacquer, width / 2, height / 2);

    //ポーズ
    textSize(100);
    fill(0);
    text("pause", width / 2, 0);

    //残りタイム表示
    textSize(50);
    fill(78, 82, 250);
    text("残りタイム:" + int(pause_time / 100), width / 2, height / 4);

    //現在のスコア
    textSize(50);
    fill(95, 229, 79);
    text("SCORE:" + score, width / 2, height / 2 - height / 8);

    //ゲームへ戻るボタン
    fill(73, 163, 167);
    if (mouseX > width / 2 - width / 4 && mouseX < width / 2 - width / 4 + width / 2) {
      if (mouseY > height / 2 && mouseY < height / 2 + height / 6) {
        fill(103, 233, 255);
      }
    }
    rect(width / 2 - width / 4, height / 2, width / 2, height / 6);
    fill(255);
    text("ゲームに戻る", width / 2, height / 2 + height / 30);

    //タイトルへ行くボタン
    fill(201, 133, 61);
    if (mouseX > width / 2 - width / 4 && mouseX < width / 2 - width / 4 + width / 2) {
      if (mouseY > height - height / 4 && mouseY < height - height / 4 + height / 6) {
        fill(255, 168, 75);
      }
    }
    rect(width / 2 - width / 4, height - height / 4, width / 2, height / 6);
    fill(255);
    textSize(50);
    text("タイトルへ", width / 2, height / 2 + height / 4 + height / 32);

  }

  decideState() {

    if (mouseX > width / 2 - width / 4 && mouseX < width / 2 - width / 4 + width / 2) {
      if (mouseY > height / 2 - height / 12 && mouseY < height / 2 + height / 12) {
        if (mouseIsPressed) {
          stateName = "game";
        }
      }
    }

    if (mouseX > width / 2 - width / 4 && mouseX < width / 2 - width / 4 + width / 2) {
      if (mouseY > height - height / 4 && mouseY < height - height / 4 + height / 6) {
        if (mouseIsPressed) {
          pause2Reset = new Reset();
          pause2Reset.reset();
        }
      }
    }
  }
}