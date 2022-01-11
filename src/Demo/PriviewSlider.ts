import { ISliderParams } from "../Interfaces/interfaces";
import Observer from "../Observer/Observer";
import Presenter from "../Presenter/Presenter";
import Panel from "./controlPanel/Panel";

class PreviewSlider extends Observer {
	public panel: Panel;
	public slider: Presenter;
	private params: ISliderParams;
	private rootClass: string;
	constructor(rootClass: string, params: ISliderParams) {
		super();
		this.rootClass = rootClass;
		this.params = params;
		this.panel = new Panel(params, rootClass, this);
		this.slider = new Presenter(rootClass, params);
		this.initPanel(params, rootClass);
	}
	private initPanel(params: ISliderParams, rootClass: string) {
		this.panel.initializeInputs(rootClass);
		this.panel.initializeFormValues(params);
		this.panel.handleChangeFormValues();
	}
}
export default PreviewSlider;
