import View from '../../View';

import { SCALE_CLASS } from '../../../constants/slider';

import { Direction } from '../../../types/slider';

import renderScaleMarks from './utils/renderScaleMarks';

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
    scale.classList.add(`js-${SCALE_CLASS}`);
    scale.classList.add(`${SCALE_CLASS}_${direction}`);
    this.scale = scale;
    this.view.DOMroot.appendChild(scale);
  }
}

export default Scale;
