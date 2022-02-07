import {
	SliderParams,
	SubscribersNames,
	UserSliderParams,
} from "../utils/interfaces";
import Slider from "../Slider";
import Panel from "./Panel/Panel";
import checkParams from "../Presenter/PresenterModules/checkParams";
import { FIRST_THUMB_STANCE } from '../utils/constants';

class PreviewSlider {
	public panel: Panel;

	public slider: Slider;

	public params: SliderParams;

	public root: string;

	public DOMroot: HTMLElement;

	constructor(root: string, params: UserSliderParams) {
		this.root = root;
		this.DOMroot = <HTMLElement>document.querySelector(root);
		this.params = checkParams(params, this.DOMroot);
		this.slider = new Slider(root, this.params);
		this.panel = new Panel(this.params, root, this);

		this.init(this.params, "init");
		this.panel.addInputListeners();
	}

	public init(params: SliderParams, mode: string) {
		if (mode === "rebuild") {
			this.params = params;
			this.slider.init(params, mode);
		}

		this.panel.initializeInputs(this.root);
		this.panel.initializeFormValues(params);
		this.subscribe();
	}

	public updatePanelValues(value: number, stance: number) {
		if (stance === FIRST_THUMB_STANCE) {
			this.params.value[stance] = value;
			this.panel.firstValueInput!.value = this.params.value[
				stance
			].toFixed(this.params.decimalPlaces);
		} else {
			this.params.value[stance] = value;
			this.panel.secondValueInput!.value = this.params.value[
				stance
			].toFixed(this.params.decimalPlaces);
		}
	}

	private subscribe() {
		this.slider.presenter.thumbs.forEach((item) => {
			item.subscribe(
				SubscribersNames.updatePanelValues,
				this.updatePanelValues.bind(this)
			);
		});
	}
}
export default PreviewSlider;
