import TIP_CLASS from './constants';
import updateTipText from './utils/updateTipText';

import View from '../../View';

import { Direction } from '../../../Slider/types';
import { PREFIX } from '../../../Slider/constants';

class Tip {
  view: View;

  tips: HTMLElement[];

  updateTipText: (stance: number) => void;

  constructor(view: View) {
    this.view = view;
    this.tips = [];
    this.updateTipText = updateTipText.bind(this);
  }

  renderTip(stance: number, direction: Direction) {
    const tip = document.createElement('div');
    tip.classList.add(TIP_CLASS);
    tip.classList.add(`${PREFIX}-${TIP_CLASS}-${stance}`);
    tip.classList.add(`${TIP_CLASS}-${stance}`);
    tip.classList.add(`${TIP_CLASS}_${direction}`);
    this.tips.push(tip);
    this.view.thumbView.thumbs[stance].appendChild(tip);
    this.updateTipText(stance);
  }
}

export default Tip;
