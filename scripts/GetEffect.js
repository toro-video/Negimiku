let c;          //Get time "count" for effect
let cnt;        //Variable to record "t". -> "getLeek" method
let millis_time;//How long to display the effect. -> "getLeek" method

<<<<<<< HEAD:scripts/GetEffect.js
class GetEffect {

	//getLeek_effect
	getLeekEffect() {

		if (score > c) {//If the score increases, reserve a variable　"t".
			cnt = t;
		}

		/*
		When the difference between the obtained variable 'cnt' and 't'
		 is less than or equal to the variable "millis_time"
		And cnt is not 0 (not the initial value), display the image "get".
		*/
		if (cnt - t < millis_time && cnt != 0) {
			image(img_get, x, y - height / 9, 80, 27.2);
		}
	}
}
=======
class GetEffect{
	
    //getLeek_effect
    getLeekEffect(){
		
	if(score > c){//If the score increases, reserve a variable　"t".
		cnt = t;
	}
		
	/*
 	When the difference between the obtained variable 'cnt' and 't'
	is less than or equal to the variable "millis_time"
	And cnt is not 0 (not the initial value), display the image "get".
	*/
	if(cnt - t < millis_time  &&  cnt != 0){
		image(img_get, x, y - height/9, 80, 27.2);
	}
    } 
}
>>>>>>> bf373cdd672f488e7c9a7598f2247ab9b9564123:GetEffect.js
