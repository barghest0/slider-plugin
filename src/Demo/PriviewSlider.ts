import { createLogicalNot } from "typescript";
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
		this.init(params, "init");
		this.panel.handleChangeFormValues();
	}
	public init(params: ISliderParams, mode: string) {
		if (mode === "rebuild") {
			this.slider.init(params, mode);
		}
		this.panel.initializeInputs(this.root);
		this.panel.initializeFormValues(params);

		this.subscribePanel();
	}
	public updatePanelValues(value: number, stance: number) {
		if (stance === 0) {
			this.params.value[stance] = value;
			this.panel.firstValueInput!.val(
				this.params.value[stance].toFixed(this.params.decimalPlaces)
			);
		} else {
			this.params.value[stance] = value;
			this.panel.secondValueInput!.val(
				this.params.value[stance].toFixed(this.params.decimalPlaces)
			);
		}
	}
	private subscribePanel() {
		this.slider.presenter.thumbs.forEach((item) => {
			item.subscribe(
				"UpdatePanelValues",
				this.updatePanelValues.bind(this)
			);
		});
	}
}
export default PreviewSlider;
