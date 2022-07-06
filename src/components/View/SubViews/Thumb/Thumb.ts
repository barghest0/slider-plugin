import View from 'components/View/View';
import Observer from 'components/Observer/Observer';
import { ViewObserver } from 'components/Observer/types';
import { PREFIX } from 'components/Slider/constants';

import updateThumbStyle from './utils/updateThumbStyle';
import dragAndDropThumb from './utils/dragAndDropThumb';
import handleThumbDrag from './utils/handleThumbDrag';
import { THUMB_CLASS } from './constants';
import increaseZIndex from './utils/increaseZIndex';
import decreaseInactiveZIndex from './utils/decreaseInactiveZIndex';
import increaseZIndexOnMax from './utils/increaseZIndexOnMax';

class Thumb extends Observer<ViewObserver> {
  view: View;

  thumbs: HTMLElement[];

  updateThumbStyle: (stance: number) => void;

  dragAndDropThumb: (stance: number) => void;

  handleThumbDrag: (event: PointerEvent, stance: number) => void;

  increaseZIndexOnMax: () => void;

  increaseZIndex: (activeStance: number) => void;

  decreaseInactiveZIndex: (activeStance: number) => void;

  private cursorOffset: number;

  private activeStance: number;

  private offset: number[];

  constructor(view: View) {
    super();
    this.view = view;
    this.offset = [];
    this.activeStance = 0;
    this.cursorOffset = 0;
    this.thumbs = [];
    this.updateThumbStyle = updateThumbStyle.bind(this);
    this.dragAndDropThumb = dragAndDropThumb.bind(this);
    this.handleThumbDrag = handleThumbDrag.bind(this);
    this.increaseZIndex = increaseZIndex.bind(this);
    this.decreaseInactiveZIndex = decreaseInactiveZIndex.bind(this);
    this.increaseZIndexOnMax = increaseZIndexOnMax.bind(this);
  }

  setOffset(stance: number, offset: number) {
    this.offset[stance] = offset;
  }

  getOffset() {
    return this.offset;
  }

  setCursorOffset(cursorOffset: number) {
    this.cursorOffset = cursorOffset;
  }

  getCursorOffset() {
    return this.cursorOffset;
  }

  setActiveStance(activeStance: number) {
    this.activeStance = activeStance;
  }

  getActiveStance() {
    return this.activeStance;
  }

  renderThumb(stance: number) {
    const thumb = document.createElement('div');
    thumb.classList.add(THUMB_CLASS);
    thumb.classList.add(`${PREFIX}-${THUMB_CLASS}-${stance}`);
    thumb.classList.add(`${THUMB_CLASS}-${stance}`);
    this.thumbs.push(thumb);
    this.view.DOMroot.appendChild(thumb);
    this.increaseZIndexOnMax();
    this.updateThumbStyle(stance);
  }
}

export default Thumb;
