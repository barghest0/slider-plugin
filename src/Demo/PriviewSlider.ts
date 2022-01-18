import { createLogicalNot } from "typescript";
import { SliderParams, UserSliderParams } from "../Interfaces/interfaces";
import Observer from "../Observer/Observer";
import Presenter from "../Presenter/Presenter";
import Slider from "../Slider";
import Panel from "./controlPanel/Panel";
import checkParams from "../Presenter/PresenterModules/checkParams";

class PreviewSlider extends Observer {
	public panel: Panel;
	public slider: Slider;
	public params: SliderParams;
	public root: string;
	constructor(root: string, params: UserSliderParams) {
		super();
		this.root = root;
		this.params = checkParams(params);
		this.panel = new Panel(this.params, root, this);
		this.slider = new Slider(root, this.params);
		this.init(this.params, "init");
		this.panel.handleChangeFormValues();
	}
	public init(params: SliderParams, mode: string) {
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
