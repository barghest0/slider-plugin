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

  public minValueInput: HTMLInputElement | null;

  public maxValueInput: HTMLInputElement | null;

  public firstValueInput: HTMLInputElement | null;

  public stepInput: HTMLInputElement | null;

  public secondValueInput: HTMLInputElement | null;

  public decimalPlacesInput: HTMLInputElement | null;

  public isRange: HTMLInputElement | null;

  public isVertical: HTMLInputElement | null;

  public hasTips: HTMLInputElement | null;

  public hasFill: HTMLInputElement | null;

  public hasScale: HTMLInputElement | null;

  public isDecimal: HTMLInputElement | null;

  public initializeFormValues: (params: SliderParams) => void;

  public initializeInputs: (root: string) => void;

  public addInputListeners:  () => void;

  public renderPanel: () => void;

  constructor(params: SliderParams, root: string, parent: PreviewSlider) {
    this.parent = parent;
    this.params = params;
    this.root = root;
    this.DOMroot = document.querySelector(root) as HTMLElement;
    this.minValueInput = null;
    this.maxValueInput = null;
    this.firstValueInput = null;
    this.secondValueInput = null;
    this.stepInput = null;
    this.isRange = null;
    this.isVertical = null;
    this.hasTips = null;
    this.hasFill = null;
    this.hasScale = null;
    this.decimalPlacesInput = null;
    this.isDecimal = null;
    this.initializeFormValues = initializeFormValues.bind(this);
    this.initializeInputs = initializeInputs.bind(this);
    this.addInputListeners = addInputListeners.bind(this);
    this.renderPanel = renderPanel.bind(this);

    this.renderPanel();
  }
}


export default Panel;
