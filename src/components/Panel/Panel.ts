import { FIRST_THUMB_STANCE } from '../Slider/constants';
import Slider from '../Slider/Slider';
import { SliderParams, UserSliderParams } from '../Slider/types';
import { PANEL_CLASS } from './constants';
import PanelInputs from './types';

import addInputListeners from './utils/addInputListeners';
import getInputs from './utils/getInputs';
import initializePanelsParams from './utils/initializePanelParams';
import renderPanel from './utils/renderPanel';

class Panel {
  slider: Slider;

  panel: HTMLElement;

  inputs: PanelInputs;

  DOMparent: HTMLElement;

  private initializePanelsParams: () => void;

  private renderPanel: () => void;

  private addInputListeners: () => void;

  constructor(slider: Slider) {
    this.slider = slider;
    this.DOMparent = slider.getParent();
    this.panel = <HTMLElement>this.DOMparent.querySelector(`.${PANEL_CLASS}`);
    this.inputs = getInputs(this.DOMparent);
    this.initializePanelsParams = initializePanelsParams.bind(this);
    this.addInputListeners = addInputListeners.bind(this);
    this.renderPanel = renderPanel.bind(this);
    this.init();
  }

  updatePanelParams(params: UserSliderParams) {
    this.slider.updateParams(params);
    this.initializePanelsParams();
  }

  updatePanelValue(stance: number, { value }: SliderParams) {
    if (stance === FIRST_THUMB_STANCE) {
      this.inputs.firstValueInput.value = String(value[stance]);
    } else {
      this.inputs.secondValueInput.value = String(value[stance]);
    }
  }

  private init() {
    this.renderPanel();
    this.setInputs(getInputs(this.DOMparent));
    this.initializePanelsParams();
    this.addInputListeners();
    this.subscribe();
  }

  private subscribe() {
    this.slider.subscribe(this.updatePanelValue.bind(this));
  }

  private setInputs(inputs: PanelInputs) {
    this.inputs = inputs;
  }
}

export default Panel;
