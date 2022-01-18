import { SliderParams, UserSliderParams } from "./Interfaces/interfaces";
import Presenter from "./Presenter/Presenter";
import checkParams from "./Presenter/PresenterModules/checkParams";

class Slider {
	public presenter: Presenter;
	private root: string;
	private params: SliderParams;
	constructor(root: string, params: UserSliderParams) {
		this.root = root;
		this.params =checkParams(params);
		this.presenter = new Presenter(root, checkParams(params));
	}

	public init(params: SliderParams, mode: string) {
		this.presenter.init(params, mode);
	}
}
export default Slider;
