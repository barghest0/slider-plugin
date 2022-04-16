import clickTrack from './utils/clickTrack';
import handleTrackClick from './utils/handleTrackClick';
import TRACK_CLASS from './constants';

import View from '../../View';

import { PREFIX } from '../../../Slider/constants';
import { Direction } from '../../../Slider/types';

import Observer from '../../../Observer/Observer';
import { ViewObserver } from '../../../Observer/types';

class Track extends Observer<ViewObserver> {
  view: View;

  track!: HTMLElement;

  clickTrack: () => void;

  handleTrackClick: (event: PointerEvent) => void;

  private cursorOffset: number;

  constructor(view: View) {
    super();
    this.view = view;
    this.cursorOffset = 0;
    this.clickTrack = clickTrack.bind(this);
    this.handleTrackClick = handleTrackClick.bind(this);
  }

  setCursorOffset(cursorOffset: number) {
    this.cursorOffset = cursorOffset;
  }

  getCursorOffset() {
    return this.cursorOffset;
  }

  renderTrack(direction: Direction) {
    const track = document.createElement('div');
    track.classList.add(TRACK_CLASS);
    track.classList.add(`${PREFIX}-${TRACK_CLASS}`);
    track.classList.add(`${TRACK_CLASS}_${direction}`);
    this.track = track;
    this.view.DOMroot.appendChild(track);
  }
}

export default Track;
