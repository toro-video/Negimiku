let score_checker = [];
let check = false;
let ranking2Reset;

class Ranking extends State{
	drawState(){
		image(bg_lacquer,width/2,height/2);//bg
		
		//new record!
    push();
    textSize(50);
    fill(random(255), random(255), random(255));
    text("NEW RECODE!!", width/2, height/10);
    pop();
		
		//ranking_system
		if(check === false){
			//The score is bigger than score_checker[1]
			if(score > int(score_checker[1])){
				for(let i = 5; i > 0; i--){
					if(int(score_checker[i]) < int(score_checker[1])){
						score_checker[i] = "";
            score_checker[i] = score_checker[i-1];
					}
					if (score_checker[i] == score_checker[1]) {
            score_checker[1] = str(score);
          }
				}
			}
			//The score is bigger than 5th place &&
			//The score is smaller than 2th place
			if (score < int(score_checker[1])) {
        for (let i=2; i<6; i++) {
          if (score >= int(score_checker[i]) && score < int(score_checker[i-1])) {
            for (let j=5; j>i; j--) {
              score_checker[j] = "";
              score_checker[j] = score_checker[j-1];
            }
            score_checker[i] = str(score);
          }
        }
      }
			check = true;
		}	
		
		//ranking_visual
		fill(0);
    if (score == int(score_checker[1])) {
      fill(random(255), random(255), random(255));
    }
    text("1ST   " + score_checker[1] + " P", width/2, height/2-height/4);
		
		fill(0);
    if (score == int(score_checker[2])) {
      fill(random(255), random(255), random(255));
    }
    text("2ND  " + score_checker[2] + " P", width/2, height/2-height/8);

    fill(0);
    if (score == int(score_checker[3])) {
      fill(random(255), random(255), random(255));
    }
    text("3RD  " + score_checker[3] + " P", width/2, height/2);

    fill(0);
    if (score == int(score_checker[4])) {
      fill(random(255), random(255), random(255));
    }
    text("4TH  " + score_checker[4] + " P", width/2, height/2+height/8);

    fill(0);
    if (score == int(score_checker[5])) {
      fill(random(255), random(255), random(255));
    }
    text("5TH  " + score_checker[5] + " P", width/2, height/2+height/4);
		
		//button_next
		fill(255, 185, 44);
    if (mouseX > width-width/6 && mouseX < width-width/30) {
      if (mouseY > height-height/10 && mouseY < height-height/30) {
        fill(214, 124, 39);
      }
    }
    push();
    textSize(30);
    text("つぎへ", width-width/10, height-height/10);
    pop();
		
	}//drawState_end
	
	decideState(){
		if (mouseX > width-width/6 && mouseX < width-width/30) {
      if (mouseY > height-height/10 && mouseY < height-height/30) {
        if (mouseIsPressed) {
					ranking2Reset = new Reset();
					ranking2Reset.reset();
				}
			}
		}
	}
}