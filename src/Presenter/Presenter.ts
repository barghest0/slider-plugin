import View from "../View/View"
import Model from "../Model/Model"


class Presenter {

	private model:Model
	private view:View

	constructor(sliderClass: string, params?: {}) {
		this.model = new Model(params)
		this.view = new View(sliderClass)
		this.init(this.model)
	}

	init(model:Model){
		this.createSlider(model)
	}

	private createSlider(model:Model){
		this.createThumb()
		console.log(model);
		
	}

	private createThumb(){
		console.log('Thumb created');
	}
}

export default Presenter
