import { Direction } from '../../../GlobalUtils/interfaces';
import Observer from '../../../Observer/Observer';
import View from '../../View';
import updateFill from './utils/updateFill';

class Fill extends Observer {
  public view: View;

  public updateFill: () => void;

  public fill: HTMLElement;

  private size: number;

  private offset: number;

  constructor(view: View) {
    super();
    this.view = view;
    this.size = 0;
    this.offset = 0;
    this.updateFill = updateFill.bind(this);
    this.fill = view.DOMroot.querySelector('.slider__fill') as HTMLElement;
  }

  public createFill(direction: Direction, hasFill: boolean) {
    if (hasFill) {
      const fill = document.createElement('div');
      fill.classList.add('slider__fill');
      fill.classList.add(`slider__fill_${direction}`);
      fill.dataset.testid = `test-fill`;
      this.fill = fill;
      this.view.DOMroot?.appendChild(fill);
    }
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
}

export default Fill;
