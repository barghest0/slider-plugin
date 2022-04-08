import Observer from '../../../Observer/Observer';
import View from '../../View';

import updateThumbStyle from './utils/updateThumbStyle';
import validateCollision from './utils/validateCollision';
import dragAndDropThumb from './utils/dragAndDropThumb';

import THUMB_CLASS from './constants';
import { PREFIX } from '../../../Slider/constants';
import handleThumbDrag from './utils/handleThumbDrag';

class Thumb extends Observer {
  view: View;

  thumbs: HTMLElement[];

  activeStance: number;

  updateThumbStyle: (stance: number) => void;

  validateCollision: (stance: number) => number;

  dragAndDropThumb: (stance: number) => void;

  handleThumbDrag: (event: PointerEvent, stance: number) => void;

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
    this.handleThumbDrag = handleThumbDrag.bind(this);
  }

  setOffset(stance: number, offset: number) {
    this.offset[stance] = offset;
  }

  getOffset() {
    return this.offset;
  }

  renderThumb(stance: number) {
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
