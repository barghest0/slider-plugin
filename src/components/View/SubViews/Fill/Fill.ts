import FILL_CLASS from './constants';
import updateFillStyle from './utils/updateFillStyle';

import View from '../../View';

import { Direction, SliderFillState } from '../../../Slider/types';
import { PREFIX } from '../../../Slider/constants';

class Fill {
  view: View;

  fill!: HTMLElement;

  updateFillStyle: () => void;

  private state: SliderFillState;

  constructor(view: View) {
    this.view = view;
    this.state = { fillOffset: 0, fillSize: 0 };
    this.updateFillStyle = updateFillStyle.bind(this);
  }

  setState({ fillOffset, fillSize }: SliderFillState) {
    this.state.fillOffset = fillOffset;
    this.state.fillSize = fillSize;
  }

  getState() {
    return this.state;
  }

  renderFill(direction: Direction) {
    const fill = document.createElement('div');
    fill.classList.add(FILL_CLASS);
    fill.classList.add(`${PREFIX}-${FILL_CLASS}`);
    fill.classList.add(`${FILL_CLASS}_${direction}`);
    this.fill = fill;
    this.view.DOMroot.appendChild(fill);
    this.updateFillStyle();
  }
}

export default Fill;
