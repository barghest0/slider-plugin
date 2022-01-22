import { SliderParams } from "../../GlobalUtils/interfaces";
import initializeFormValues from "./PanelModules/initializeFormValues";
import initializeInputs from "./PanelModules/initializeInputs";
import handleChangeFormValues from "./PanelModules/handleChangeFormValues";
import PreviewSlider from "../PreviewSlider";
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
	public initializeFormValues: (params: SliderParams) => void;
	public initializeInputs: (root: string) => void;
	public handleChangeFormValues: () => void;
	public params: SliderParams;
	public parent: PreviewSlider;
	public root: string;

	constructor(params: SliderParams, root: string, parent: PreviewSlider) {
		this.parent = parent;
		this.params = params;
		this.root = root;
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
		this.handleChangeFormValues = handleChangeFormValues.bind(this);
	}
}

export default Panel;
