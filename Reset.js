class Reset{
	
	reset(){
		//reset
		check = false;
		score = 0;
		x = width/2;
		for (let i = 0; i < 15; i++) {
			leekY[i] = -50;
		}
		t = limitTime;
		pause_time = limitTime;
		pSpeed = 3.0;
		poisonusLeekY = -50;
		poisonusLeekSpeed = 0;
		poisonusLeekInc = 0;
		goldLeekX = width/3 - width/5;
		goldLeekY = -250;
		speedCanX = width + 50;
		cnt = c = 0; 
		stateName = "title";
	}
}