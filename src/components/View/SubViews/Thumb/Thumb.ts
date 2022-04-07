import Observer from '../../../Observer/Observer';
import View from '../../View';

import updateThumbStyle from './utils/updateThumbStyle';
import validateCollision from './utils/validateCollision';
import dragAndDropThumb from './utils/dragAndDropThumb';

import THUMB_CLASS from './constants';
import { PREFIX } from '../../../Slider/constants';

class Thumb extends Observer {
  public view: View;

  public thumbs: HTMLElement[];

  public activeStance: number;

  public updateThumbStyle: (stance: number) => void;

  public validateCollision: (stance: number) => number;

  public dragAndDropThumb: (stance: number) => void;

  private offset: number[];

  constructor(view: View) {
    super();
    this.view = view;
    this.offset = [];
    this.activeStance = 0;
    this.thumbs = [];
    this.updateThumbStyle = updateThumbStyle.bind(this);
    this.validateCollision = validateCollision.bind(this);
    this.dragAndDropThumb = dragAndDropThumb.bind(this);
  }

  public setOffset(stance: number, offset: number) {
    this.offset[stance] = offset;
  }

  public getOffset() {
    return this.offset;
  }

  public renderThumb(stance: number) {
    const thumb = document.createElement('div');
    thumb.classList.add(THUMB_CLASS);
    thumb.classList.add(`${PREFIX}-${THUMB_CLASS}-${stance}`);
    thumb.classList.add(`${THUMB_CLASS}-${stance}`);
    this.thumbs.push(thumb);
    this.view.DOMroot.appendChild(thumb);
    this.updateThumbStyle(stance);
  }
}

export default Thumb;
