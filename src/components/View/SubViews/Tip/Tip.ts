import View from '../../View';

import { Direction } from '../../../Slider/types';

import updateTipStyle from './utils/updateTipStyle';

import TIP_CLASS from './constants';
import { PREFIX } from '../../../Slider/constants';

class Tip {
  view: View;

  tips: HTMLElement[];

  updateTipStyle: (stance: number) => void;

  private offset: number[];

  constructor(view: View) {
    this.view = view;
    this.offset = [];
    this.tips = [];
    this.updateTipStyle = updateTipStyle.bind(this);
  }

  setOffset(stance: number, offset: number) {
    this.offset[stance] = offset;
  }

  getOffset() {
    return this.offset;
  }

  renderTip(stance: number, direction: Direction) {
    const tip = document.createElement('div');
    tip.classList.add(TIP_CLASS);
    tip.classList.add(`${PREFIX}-${TIP_CLASS}-${stance}`);
    tip.classList.add(`${TIP_CLASS}-${stance}`);
    tip.classList.add(`${TIP_CLASS}_${direction}`);
    this.tips.push(tip);
    this.view.DOMroot.appendChild(tip);
    this.updateTipStyle(stance);
  }
}

export default Tip;
