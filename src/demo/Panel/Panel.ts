import {
  FIRST_THUMB_STANCE,
  SECOND_THUMB_STANCE,
} from 'components/Slider/constants';
import Slider from 'components/Slider/Slider';
import { SliderParams, UserSliderParams } from 'components/Slider/types';

import addInputListeners from './utils/addInputListeners';
import getInputs from './utils/getInputs';
import initializePanelsParams from './utils/initializePanelParams';
import PanelInputs from './types';

class Panel {
  slider: Slider;

  panel!: HTMLElement;

  inputs: PanelInputs;

  DOMparent: HTMLElement;

  private initializePanelsParams: () => void;

  private addInputListeners: () => void;

  constructor(slider: Slider) {
    this.slider = slider;
    this.DOMparent = slider.getParent();
    this.inputs = getInputs(this.DOMparent);
    this.initializePanelsParams = initializePanelsParams.bind(this);
    this.addInputListeners = addInputListeners.bind(this);
    this.init();
  }

  updatePanelParams(params: UserSliderParams) {
    this.slider.updateParams(params);
    this.initializePanelsParams();
  }

  updatePanelValue({ value }: SliderParams) {
    this.inputs.firstValueInput.value = String(value[FIRST_THUMB_STANCE]);
    if (value[SECOND_THUMB_STANCE]) {
      this.inputs.secondValueInput.value = String(value[SECOND_THUMB_STANCE]);
    }
  }

  private init() {
    this.setPanel();
    this.setInputs(getInputs(this.panel));
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

  private setPanel() {
    this.panel = <HTMLElement>this.DOMparent.nextElementSibling;
  }
}

export default Panel;
