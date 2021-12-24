import { ISliderParams } from "../Interfaces/interfaces";
import Presenter from "../Presenter/Presenter";
import Panel from "./controlPanel/Panel";

class PreviewSlider {
	private params: ISliderParams;
	private panel: Panel;
	private slider: Presenter;
	private sliderClass: string;
	constructor(sliderClass: string, params: ISliderParams) {
		this.sliderClass = sliderClass;
		this.params = params;
		this.panel = new Panel(params, sliderClass);
		this.slider = new Presenter(".slider", params);
		this.initPanel(params, sliderClass);
	}
	private initPanel(params: ISliderParams, sliderClass: string) {
		this.panel.initializeInputs(sliderClass);
		this.panel.initializeFormValues(params);
	}
}
export default PreviewSlider;
