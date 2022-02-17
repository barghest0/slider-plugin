import { Direction } from '../../../types/slider';
import Observer from '../../../Observer/Observer';
import View from '../../View';
import updateFillStyle from './utils/updateFillStyle';
import { FILL_CLASS } from '../../../constants/slider';

class Fill extends Observer {
  public view: View;

  public fill: HTMLElement;

  public updateFillStyle: () => void;

  private size: number;

  private offset: number;

  constructor(view: View) {
    super();
    this.fill = <HTMLElement>document.querySelector(`.${FILL_CLASS}`);
    this.view = view;
    this.size = 0;
    this.offset = 0;
    this.updateFillStyle = updateFillStyle.bind(this);
  }

  public setSize(size: number) {
    this.size = size;
  }

  public setOffset(offset: number) {
    this.offset = offset;
  }

  public getSize() {
    return this.size;
  }

  public getOffset() {
    return this.offset;
  }

  public createFill(direction: Direction, hasFill: boolean) {
    if (hasFill) {
      const fill = document.createElement('div');
      fill.classList.add(FILL_CLASS);
      fill.classList.add(`js-${FILL_CLASS}`);
      fill.classList.add(`${FILL_CLASS}_${direction}`);
      this.fill = fill;
      this.view.DOMroot.appendChild(fill);
      this.updateFillStyle();
    }
  }
}

export default Fill;
