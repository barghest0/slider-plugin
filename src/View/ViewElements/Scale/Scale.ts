import { Direction } from "../../../Interfaces/interfaces";
import View from "../../View";

class Scale {
	private	parentElement:View
	constructor(parentElement:View) {
		this.parentElement = parentElement	
	}

		public createScale(direction:Direction) {
				this.parentElement.parent.append(`<div class="slider__scale slider__scale-${direction}"></div>`)	
		}
}


export default Scale
