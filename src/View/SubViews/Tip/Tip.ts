import { Direction } from '../../../types/slider';
import Observer from '../../../Observer/Observer';
import View from '../../View';
import updateTipStyle from './utils/updateTipStyle';
import { TIP_CLASS } from '../../../constants/slider';

class Tip extends Observer {
  public view: View;

  public tips: HTMLElement[];

  public updateTipStyle: (stance: number) => void;

  private offset: number[];

  constructor(view: View) {
    super();
    this.view = view;
    this.offset = [];
    this.tips = [];
    this.updateTipStyle = updateTipStyle.bind(this);
  }

  public setOffset(stance: number, offset: number) {
    this.offset[stance] = offset;
  }

  public getOffset() {
    return this.offset;
  }

  public createTip(stance: number, direction: Direction) {
    const tip = document.createElement('div');
    tip.classList.add(TIP_CLASS);
    tip.classList.add(`js-${TIP_CLASS}-${stance}`);
    tip.classList.add(`${TIP_CLASS}-${stance}`);
    tip.classList.add(`${TIP_CLASS}_${direction}`);
    this.tips.push(tip);
    this.view.DOMroot.appendChild(tip);
    this.updateTipStyle(stance);
  }
}

export default Tip;
