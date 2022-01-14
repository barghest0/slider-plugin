import { ISliderParams } from "../Interfaces/interfaces";
import Observer from "../Observer/Observer";
import Presenter from "../Presenter/Presenter";
import Slider from "../Slider";
import Panel from "./controlPanel/Panel";

class PreviewSlider extends Observer {
	public panel: Panel;
	public slider: Slider;
	public params: ISliderParams;
	public root: string;
	constructor(root: string, params: ISliderParams) {
		super();
		this.root = root;
		this.params = params;
		this.panel = new Panel(params, root, this);
		this.slider = new Slider(root, params);
		this.initPanel(params, root);
	}
	public initPanel(params: ISliderParams, root: string) {
		this.panel.initializeInputs(root);
		this.panel.initializeFormValues(params);
		this.panel.handleChangeFormValues();
	}
}
export default PreviewSlider;
