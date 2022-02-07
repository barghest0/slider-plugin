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
    this.minValueInput = <HTMLInputElement>document.querySelector('.js-input__min-value');
    this.maxValueInput = <HTMLInputElement>document.querySelector('.js-input__max-value');
    this.firstValueInput = <HTMLInputElement>document.querySelector('.js-input__first-value');
    this.secondValueInput = <HTMLInputElement>document.querySelector('.js-input__second-value');
    this.decimalPlacesInput = <HTMLInputElement>document.querySelector('.js-input__decimal-places');

    this.stepInput = <HTMLInputElement>document.querySelector('.js-input__step');
    this.isRange = <HTMLInputElement>document.querySelector('.js-checkbox__is-range');
    this.isVertical = <HTMLInputElement>document.querySelector('.js-checkbox__vertical');
    this.hasFill = <HTMLInputElement>document.querySelector('.js-checkbox__fill');
    this.hasTips = <HTMLInputElement>document.querySelector('.js-checkbox__tips');
    this.hasScale = <HTMLInputElement>document.querySelector('.js-checkbox__scale');
    this.isDecimal = <HTMLInputElement>document.querySelector('.js-checkbox__decimal');
    this.initializeFormValues = initializeFormValues.bind(this);
    this.initializeInputs = initializeInputs.bind(this);
    this.addInputListeners = addInputListeners.bind(this);
    this.renderPanel = renderPanel.bind(this);



    this.renderPanel();
  }
}


export default Panel;
