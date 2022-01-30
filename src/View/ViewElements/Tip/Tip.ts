import { Direction } from '../../../GlobalUtils/interfaces';
import Observer from '../../../Observer/Observer';
import View from '../../View';
import updateTipsPosition from './utils/updateTipsPosition';

class Tip extends Observer {
  public view: View;

  public updateTipsPosition: (offset: number, stance: number, value: number) => void;

  public tips: HTMLElement[];

  private offset: number[];

  constructor(view: View) {
    super();
    this.view = view;
    this.offset = [];
    this.updateTipsPosition = updateTipsPosition.bind(this);
    this.tips = [];
  }

  public setOffset(offset: number, stance: number) {
    this.offset[stance] = offset;
  }

  public getOffset() {
    return this.offset;
  }

  public createTip(direction: Direction, stance: number, hasTips: boolean) {
    if (hasTips) {
      const tip = document.createElement('div');
      tip.classList.add('slider__tip');
      tip.classList.add(`slider__tip-${stance}`);
      tip.classList.add(`slider__tip_${direction}`);
      tip.dataset.testid = `test-tip`;
      this.tips.push(tip);
      this.view.DOMroot?.appendChild(tip);
    }
  }
}

export default Tip;
