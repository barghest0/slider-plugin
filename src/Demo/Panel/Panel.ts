import initializePanelsParams from './PanelModules/initializePanelParams';
import initializeInputs from './PanelModules/initializeInputs';
import addInputListeners from './PanelModules/addInputListeners';
import renderPanel from './PanelModules/renderPanel';
import {
  DECIMAL_PLACES_CLASS,
  FIRST_VALUE_CLASS,
  HAS_FILL_CLASS,
  HAS_SCALE_CLASS,
  HAS_TIPS_CLASS,
  IS_DECIMAL_CLASS,
  IS_RANGE_CLASS,
  IS_VERTICAL_CLASS,
  MAX_CLASS,
  MIN_CLASS,
  SECOND_VALUE_CLASS,
  STEP_CLASS,
} from './constants';
import Slider from '../../Slider';
import Observer from '../../Observer/Observer';

class Panel extends Observer {
  public slider: Slider;

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

  public initializePanelsParams: () => void;

  public initializeInputs: (root: string) => void;

  public addInputListeners: () => void;

  public renderPanel: () => void;

  constructor(root: string, slider: Slider) {
    super();
    this.slider = slider;
    this.root = root;
    this.DOMroot = <HTMLElement>document.querySelector(root);
    this.minValueInput = <HTMLInputElement>document.querySelector(`.js-${MIN_CLASS}`);
    this.maxValueInput = <HTMLInputElement>document.querySelector(`.js-${MAX_CLASS}`);
    this.firstValueInput = <HTMLInputElement>(
      document.querySelector(`.js-${FIRST_VALUE_CLASS}`)
    );
    this.secondValueInput = <HTMLInputElement>(
      document.querySelector(`.js-${SECOND_VALUE_CLASS}`)
    );
    this.decimalPlacesInput = <HTMLInputElement>(
      document.querySelector(`.js-${DECIMAL_PLACES_CLASS}`)
    );
    this.stepInput = <HTMLInputElement>document.querySelector(`.js-${STEP_CLASS}`);
    this.isRange = <HTMLInputElement>document.querySelector(`.js-${IS_RANGE_CLASS}`);
    this.isVertical = <HTMLInputElement>(
      document.querySelector(`.js-${IS_VERTICAL_CLASS}`)
    );
    this.hasFill = <HTMLInputElement>document.querySelector(`.js-${HAS_FILL_CLASS}`);
    this.hasTips = <HTMLInputElement>document.querySelector(`.js-${HAS_TIPS_CLASS}`);
    this.hasScale = <HTMLInputElement>document.querySelector(`.js-${HAS_SCALE_CLASS}`);
    this.isDecimal = <HTMLInputElement>document.querySelector(`.js-${IS_DECIMAL_CLASS}`);
    this.initializePanelsParams = initializePanelsParams.bind(this);
    this.initializeInputs = initializeInputs.bind(this);
    this.addInputListeners = addInputListeners.bind(this);
    this.renderPanel = renderPanel.bind(this);
  }

  public init() {
    this.renderPanel();
    this.initializeInputs(this.root);
    this.initializePanelsParams();
    this.addInputListeners();
  }
}

export default Panel;
