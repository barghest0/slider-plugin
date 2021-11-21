import View from "../View/View"


class Presenter {
	private view: any
	private sliderClass: any
	constructor(sliderClass: any, params?: any) {
		this.view = new View(sliderClass)
		this.createSlider()
	}
	private createSlider() {
		this.view.viewThumb()
		
	}
}

export default Presenter
