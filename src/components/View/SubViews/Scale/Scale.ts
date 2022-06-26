import View from 'components/View/View';
import { Direction } from 'components/Slider/types';
import { PREFIX } from 'components/Slider/constants';
import Observer from 'components/Observer/Observer';
import { ViewObserver } from 'components/Observer/types';

import renderScaleMarks from './utils/renderScaleMarks';
import { SCALE_CLASS } from './constants';
import handleScaleMarkClick from './utils/handleScaleMarkClick';

class Scale extends Observer<ViewObserver> {
  scale!: HTMLElement;

  view: View;

  renderScaleMarks: (
    step: number,
    max: number,
    min: number,
    direction: Direction,
  ) => void;

  handleScaleMarkClick: (event: PointerEvent, offset: number) => void;

  private cursorOffset: number;

  constructor(view: View) {
    super();
    this.view = view;
    this.renderScaleMarks = renderScaleMarks.bind(this);
    this.handleScaleMarkClick = handleScaleMarkClick.bind(this);
    this.cursorOffset = 0;
  }

  setCursorOffset(cursorOffset: number) {
    this.cursorOffset = cursorOffset;
  }

  getCursorOffset() {
    return this.cursorOffset;
  }

  renderScale(direction: Direction) {
    const scale = document.createElement('div');
    scale.classList.add(SCALE_CLASS);
    scale.classList.add(`${PREFIX}-${SCALE_CLASS}`);
    scale.classList.add(`${SCALE_CLASS}_${direction}`);
    this.scale = scale;
    this.view.DOMroot.appendChild(scale);
  }
}

export default Scale;
