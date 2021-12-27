import { ISliderParams } from "../Interfaces/interfaces";
import Observer from "../Observer/Observer";
import Presenter from "../Presenter/Presenter";
import Panel from "./controlPanel/Panel";

class PreviewSlider extends Observer {
	public panel: Panel;
	public slider: Presenter;

	private params: ISliderParams;
	private sliderClass: string;
	constructor(sliderClass: string, params: ISliderParams) {
		super();
		this.sliderClass = sliderClass;
		this.params = params;
		this.panel = new Panel(params, sliderClass, this);
		this.slider = new Presenter(".slider", params);
		this.initPanel(params, sliderClass);
	}
	private initPanel(params: ISliderParams, sliderClass: string) {
		this.panel.initializeInputs(sliderClass);
		this.panel.initializeFormValues(params);
		this.panel.handleChangeFormValues();
	}
}
export default PreviewSlider;
