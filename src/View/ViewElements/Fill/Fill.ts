import { Direction } from '../../../utils/interfaces';
import Observer from '../../../Observer/Observer';
import View from '../../View';
import updateFill from './utils/updateFill';
import { FILL_CLASS } from '../../../utils/constants';

class Fill extends Observer {
  public view: View;

  public fill: HTMLElement;

  public updateFill: () => void;

  private size: number;

  private offset: number;

  constructor(view: View) {
    super();
    this.fill = <HTMLElement>document.querySelector(`.${FILL_CLASS}`);
    this.view = view;
    this.size = 0;
    this.offset = 0;
    this.updateFill = updateFill.bind(this);
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

  public createFill(direction: Direction) {
    const fill = document.createElement('div');
    fill.classList.add(FILL_CLASS);
    fill.classList.add(`js-${FILL_CLASS}`);

    fill.classList.add(`${FILL_CLASS}_${direction}`);
    fill.dataset.testid = `test-fill`;
    this.fill = fill;
    this.view.DOMroot.appendChild(fill);
  }
}

export default Fill;
