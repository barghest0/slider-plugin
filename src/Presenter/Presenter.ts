import View from "../View/View";
import Model from "../Model/Model";
import { ISliderParams } from "../utils/interfaces/interfaces";

class Presenter {
	private model: Model;
	private view: View;
	private params: ISliderParams;
	constructor(sliderClass: string, params: ISliderParams) {
		this.model = new Model(sliderClass);
		this.view = new View(sliderClass);
		this.params = params;
		this.init(params);
		this.subscribe();
	}

	init(params: ISliderParams) {
		this.createSlider().setModelState(params).setViewState().updateView();
	}

	private createSlider(): this {
		this.view.createViewSlider();
		return this;
	}
	private setViewState() {
		const state = this.model.getState();
		this.view.setState(state);
		return this;
	}

	private updateView(): this {
		this.view.updateViewSlider();

		return this;
	}

	private updateModel(...args: any) {
		const [value, x, y] = args;
		this.model.updateModel(value, x, y);
	}

	private setModelState(state: any) {
		const { min, max, step } = state;
		this.model.setEnds({ min, max });
		this.model.setStep(step);
		this.model.setSize({ height: 4, width: 200 });
		return this;
	}

	private subscribe() {
		this.view.subscribe("UpdateModelState", this.updateModel.bind(this));
		this.model.subscribe("UpdateView", this.updateView.bind(this));
	}
}

export default Presenter;
