import View from "../../View";

class Scale {
	private	parentElement:View
	constructor(parentElement:View) {
		this.parentElement = parentElement	
	}

		public createScale() {
				this.parentElement.parent.append('<div class="slider__scale"></div>')	
		}
}


export default Scale
