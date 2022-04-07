import View from '../../View';

import { SCALE_CLASS } from './constants';

import { Direction } from '../../../Slider/types';

import renderScaleMarks from './utils/renderScaleMarks';
import { PREFIX } from '../../../Slider/constants';

class Scale {
  public scale: HTMLElement;

  public view: View;

  public renderScaleMarks: (
    step: number,
    max: number,
    min: number,
    direction: Direction,
  ) => void;

  constructor(view: View) {
    this.view = view;
    this.scale = <HTMLElement>document.querySelector(`.${SCALE_CLASS}`);
    this.renderScaleMarks = renderScaleMarks.bind(this);
  }

  public renderScale(direction: Direction) {
    const scale = document.createElement('div');
    scale.classList.add(SCALE_CLASS);
    scale.classList.add(`${PREFIX}-${SCALE_CLASS}`);
    scale.classList.add(`${SCALE_CLASS}_${direction}`);
    this.scale = scale;
    this.view.DOMroot.appendChild(scale);
  }
}

export default Scale;
