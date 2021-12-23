import { ISliderParams } from "../../Interfaces/interfaces";
import initializeFormValues from "./PanelModules/initializeFormValues";

class Panel {
	public initializeFormValues: (
		params: ISliderParams,
		sliderClass: string
	) => void;
	private params: ISliderParams;
	constructor(params: ISliderParams) {
		this.params = params;
		this.initializeFormValues = initializeFormValues;
	}
}

export default Panel;
