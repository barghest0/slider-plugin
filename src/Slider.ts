import { ISliderParams } from "./Interfaces/interfaces";
import Presenter from "./Presenter/Presenter";

class Slider {
	public presenter: Presenter;
	private root: string;
	private params: ISliderParams;
	constructor(root: string, params: ISliderParams) {
		this.root = root;
		this.params = params;
		this.presenter = new Presenter(root, params);
	}
}
export default Slider;
