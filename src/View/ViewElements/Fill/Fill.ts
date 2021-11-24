import View from "../../View";

class Fill {
	private	parentElement: View
		private fill: JQuery<HTMLElement>
	constructor(parentElement:View) {
		this.parentElement = parentElement
			this.fill = $('.slider__fill')
	}

	public createFill(){
				this.parentElement.parent.append('<div class="slider__fill"></div>')
		}
}




export default Fill
