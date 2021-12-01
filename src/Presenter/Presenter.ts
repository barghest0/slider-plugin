import View from "../View/View"
import Model from "../Model/Model"
import { ISliderParams } from "../utils/interfaces/interfaces"

class Presenter {
	private model: Model
	private view: View
	private params : ISliderParams
	constructor(sliderClass: string, params: ISliderParams) {
		this.model = new Model(sliderClass)
		this.view = new View(sliderClass)
		this.params = params
		this.init(params)
	}

	init(params:ISliderParams) {
		this.createSlider(params)
		.updateSlider()
		.setEnds(params)
		.setStep(params)
	}

	private createSlider(params:ISliderParams):this {
		this.view.createViewSlider()
		return this
	}

	private updateSlider():this {
		this.view.updateViewSlider()
		return this
	}


	private setEnds({min,max}:ISliderParams):this {
		this.model.setEnds({min,max})
		this.view.setEnds({min,max})
		return this;
	}

	private setStep({step}:ISliderParams){
		this.model.setStep(step)
		this.view.setStep(step)
		return this
	}
}

export default Presenter
