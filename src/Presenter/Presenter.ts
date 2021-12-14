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
		this.addListeners();
	}

	init(params: ISliderParams) {
		this.renderSlider(params).setModelState(params).setViewState();
	}

	private renderSlider(params:ISliderParams): this {
		this.view.render(params);
		return this;
	}
	private setViewState() {
		const state = this.model.getState();
		this.view.setState(state);
		return this;
	}

	private updateModel(...args: any) {
		const [value, x, y] = args;
		this.model.updateModel(value, x, y);
	}

	private setModelState(state: any) {
		const { min, max, step, value, isRange, direction } = state;
		this.model.setEnds({ min, max });
		this.model.setStep(step);
		this.model.setSize({ height: 4, width: 200 });
		this.model.setValue(value);
		this.model.setIsRange(isRange);
		this.model.setDirection(direction);

		return this;
	}

	private subscribe() {
		this.view.subscribe("UpdateModelState", this.updateModel.bind(this));
		this.model.subscribe("UpdateView", this.setViewState.bind(this));
	}
	private addListeners() {
		this.view.thumbView.dragThumb();
		this.view.trackView.clickTrack();
	}
}

export default Presenter;
