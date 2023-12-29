class State {
	constructor() {
		//like Abstract class

		if (this.constructor === State) {
			throw new TypeErroe('Abstract class cannot be instantiated directly.');
		}

		//Class not have "drawState()"
		if (this.drawState === undefined) {
			throw new TypeError('Classes extending the abstract class must contain "drawState()"');
		}
		//Class not have "decideState()"
		if (this.decideState === undefined) {
			throw new TypeError('Classes extending the abstract class must contain "decideState()"');
		}
	}

}//State class end