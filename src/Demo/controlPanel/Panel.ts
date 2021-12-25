import { ISliderParams } from "../../Interfaces/interfaces";
import initializeFormValues from "./PanelModules/initializeFormValues";
import initializeInputs from "./PanelModules/initializeInputs";
class Panel {
	public minValueInput: JQuery<HTMLElement> | null;
	public maxValueInput: JQuery<HTMLElement> | null;
	public firstValueInput: JQuery<HTMLElement> | null;
	public stepInput: JQuery<HTMLElement> | null;
	public secondValueInput: JQuery<HTMLElement> | null;
	public isRange: JQuery<HTMLElement> | null;
	public isVertical: JQuery<HTMLElement> | null;
	public hasTips: JQuery<HTMLElement> | null;
	public hasFill: JQuery<HTMLElement> | null;
	public initializeFormValues: (params: ISliderParams) => void;
	public initializeInputs: (sliderClass: string) => void;
	private params: ISliderParams;
	private sliderClass: string;
	constructor(params: ISliderParams, sliderClass: string) {
		this.params = params;
		this.sliderClass = sliderClass;
		this.minValueInput = null;
		this.maxValueInput = null;
		this.firstValueInput = null;
		this.secondValueInput = null;
		this.stepInput = null;
		this.isRange = null;
		this.isVertical = null;
		this.hasTips = null;
		this.hasFill = null;
		this.initializeFormValues = initializeFormValues.bind(this);
		this.initializeInputs = initializeInputs.bind(this);
	}
}

export default Panel;
