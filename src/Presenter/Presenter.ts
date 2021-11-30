import View from "../View/View"
import Model from "../Model/Model"
import { ISliderState } from "../utils/interfaces/interfaces"

class Presenter {
	private model: Model
	private view: View

	constructor(sliderClass: string, params: ISliderState) {
		this.model = new Model(params)
		this.view = new View(sliderClass)
		this.init(this.model)
	}

	init(model: Model) {
		
			this.createSlider(model)
			this.updateSlider()
		

	}

	private createSlider(model: Model) {
		this.view.createViewSlider()
	}

	private updateSlider() {
		this.view.updateViewSlider()
	}
}

export default Presenter
