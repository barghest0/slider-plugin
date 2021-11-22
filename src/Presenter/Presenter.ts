import View from "../View/View"
import Model from "../Model/Model"


class Presenter {

	private model:any
	private view:any

	constructor(sliderClass: any, params?: any) {
		this.model = new Model(params)
		this.view = new View(sliderClass)
		this.init(this.model)
	}

	init(model:any){
		this.createSlider(model)
	}

	private createSlider(model:any){
		this.createThumb()
		console.log(model);
		
	}

	private createThumb(){
		console.log('Thumb created');
	}
}

export default Presenter
