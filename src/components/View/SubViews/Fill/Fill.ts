import Observer from '../../../Observer/Observer';
import View from '../../View';

import { Direction, SliderFillState } from '../../../Slider/types';

import { FILL_CLASS } from './constants';

import updateFillStyle from './utils/updateFillStyle';
import { PREFIX } from '../../../Slider/constants';

class Fill extends Observer {
  public view: View;

  public fill: HTMLElement;

  public updateFillStyle: () => void;

  private state: SliderFillState;

  constructor(view: View) {
    super();
    this.fill = <HTMLElement>document.querySelector(`.${FILL_CLASS}`);
    this.view = view;
    this.state = { fillOffset: 0, fillSize: 0 };
    this.updateFillStyle = updateFillStyle.bind(this);
  }

  public setState({ fillOffset, fillSize }: SliderFillState) {
    this.state.fillOffset = fillOffset;
    this.state.fillSize = fillSize;
  }

  public getState() {
    return this.state;
  }

  public renderFill(direction: Direction) {
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
