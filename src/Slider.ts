import { InitMods, SliderParams, UserSliderParams } from './utils/interfaces';
import Presenter from './Presenter/Presenter';
import checkParams from './Presenter/PresenterModules/validateParams/validateParams';

class Slider {
	public presenter: Presenter;

	public root: string;

	public DOMroot: HTMLElement;

	public params: SliderParams;

	constructor(root: string, params: UserSliderParams) {
		this.root = root;
		this.DOMroot = <HTMLElement>document.querySelector(root);
		this.params = checkParams(params, this.DOMroot);
		this.presenter = new Presenter(root, checkParams(params, this.DOMroot));
		this.init(this.params, InitMods.init);
	}

	public init(params: SliderParams, mode: string) {
		this.presenter.init(params, mode);
	}
}

export default Slider;
