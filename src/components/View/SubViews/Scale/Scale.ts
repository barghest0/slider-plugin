import View from 'components/View/View';
import { Direction } from 'components/Slider/types';
import { PREFIX } from 'components/Slider/constants';

import renderScaleMarks from './utils/renderScaleMarks';
import { SCALE_CLASS } from './constants';

class Scale {
  scale!: HTMLElement;

  view: View;

  renderScaleMarks: (
    step: number,
    max: number,
    min: number,
    direction: Direction,
  ) => void;

  constructor(view: View) {
    this.view = view;
    this.renderScaleMarks = renderScaleMarks.bind(this);
  }

  renderScale(direction: Direction) {
    const scale = document.createElement('div');
    scale.classList.add(SCALE_CLASS);
    scale.classList.add(`${PREFIX}-${SCALE_CLASS}`);
    scale.classList.add(`${SCALE_CLASS}_${direction}`);
    this.scale = scale;
    this.view.DOMroot.appendChild(scale);
  }
}

export default Scale;
