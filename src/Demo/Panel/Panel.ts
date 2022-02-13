import { SliderParams } from '../../utils/interfaces';
import initializeFormValues from './PanelModules/initializeFormValues';
import initializeInputs from './PanelModules/initializeInputs';
import addInputListeners from './PanelModules/addInputListeners';
import PreviewSlider from '../PreviewSlider';
import renderPanel from './PanelModules/renderPanel';

class Panel {
	public params: SliderParams;

	public parent: PreviewSlider;

	public root: string;

	public DOMroot: HTMLElement;

	public minValueInput: HTMLInputElement;

	public maxValueInput: HTMLInputElement;

	public firstValueInput: HTMLInputElement;

	public stepInput: HTMLInputElement;

	public secondValueInput: HTMLInputElement;

	public decimalPlacesInput: HTMLInputElement;

	public isRange: HTMLInputElement;

	public isVertical: HTMLInputElement;

	public hasTips: HTMLInputElement;

	public hasFill: HTMLInputElement;

	public hasScale: HTMLInputElement;

	public isDecimal: HTMLInputElement;

	public initializeFormValues: (params: SliderParams) => void;

	public initializeInputs: (root: string) => void;

	public addInputListeners: () => void;

	public renderPanel: () => void;

	constructor(params: SliderParams, root: string, parent: PreviewSlider) {
		this.parent = parent;
		this.params = params;
		this.root = root;
		this.DOMroot = <HTMLElement>document.querySelector(root);
		this.minValueInput = <HTMLInputElement>document.querySelector('.js-min-value');
		this.maxValueInput = <HTMLInputElement>document.querySelector('.js-max-value');
		this.firstValueInput = <HTMLInputElement>document.querySelector('.js-first-value');
		this.secondValueInput = <HTMLInputElement>document.querySelector('.js-second-value');
		this.decimalPlacesInput = <HTMLInputElement>document.querySelector('.js-decimal-places');
		this.stepInput = <HTMLInputElement>document.querySelector('.js-step');

		this.isRange = <HTMLInputElement>document.querySelector('.js-is-range');
		this.isVertical = <HTMLInputElement>document.querySelector('.js-vertical');
		this.hasFill = <HTMLInputElement>document.querySelector('.js-fill');
		this.hasTips = <HTMLInputElement>document.querySelector('.js-tips');
		this.hasScale = <HTMLInputElement>document.querySelector('.js-scale');
		this.isDecimal = <HTMLInputElement>document.querySelector('.js-decimal');
		this.initializeFormValues = initializeFormValues.bind(this);
		this.initializeInputs = initializeInputs.bind(this);
		this.addInputListeners = addInputListeners.bind(this);
		this.renderPanel = renderPanel.bind(this);

		this.renderPanel();
	}
}

export default Panel;
