import { Direction } from "../../../utils/interfaces/interfaces";
import View from "../../View";

class Fill {
	private	parentElement: View
		private fill: JQuery<HTMLElement>
	constructor(parentElement:View) {
		this.parentElement = parentElement
			this.fill = $('.slider__fill')
	}

	public createFill(direction:Direction){
				this.parentElement.parent.append(`<div class="slider__fill slider__fill-${direction}"></div>`)
		}
}




export default Fill
