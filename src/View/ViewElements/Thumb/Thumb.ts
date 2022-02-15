import Observer from '../../../Observer/Observer';
import View from '../../View';
import updateThumbPosition from './utils/updateThumbPosition';
import validateCollision from './utils/validateCollision';
import dragAndDropThumb from './utils/dragAndDropThumb';
import { THUMB_CLASS } from '../../../utils/constants';

class Thumb extends Observer {
  public view: View;

  public thumbs: HTMLElement[];

  private offset: number[];

  public activeStance: number;

  public updateThumbPosition: (stance: number) => void;

  public validateCollision: (stance: number) => number;

  public dragAndDropThumb: (stance: number) => void;

  private value: number[];

  constructor(view: View) {
    super();
    this.view = view;
    this.value = [];
    this.offset = [];

    this.activeStance = 0;
    this.thumbs = [];
    this.updateThumbPosition = updateThumbPosition.bind(this);
    this.validateCollision = validateCollision.bind(this);
    this.dragAndDropThumb = dragAndDropThumb.bind(this);
  }

  public createThumb(stance: number) {
    const thumb = document.createElement('div');
    thumb.classList.add(THUMB_CLASS);
    thumb.classList.add(`js-${THUMB_CLASS}-${stance}`);
    thumb.classList.add(`${THUMB_CLASS}-${stance}`);
    this.thumbs.push(thumb);
    this.view.DOMroot.appendChild(thumb);
  }

  public setValue(value: number, stance: number) {
    this.value[stance] = value;
  }

  public getValue() {
    return this.value;
  }

  public setOffset(offset: number, stance: number) {
    this.offset[stance] = offset;
  }

  public getOffset() {
    return this.offset;
  }
}

export default Thumb;
