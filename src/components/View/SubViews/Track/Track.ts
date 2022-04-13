import View from '../../View';
import Observer from '../../../Observer/Observer';

import { Direction } from '../../../Slider/types';

import TRACK_CLASS from './constants';

import { PREFIX } from '../../../Slider/constants';
import clickTrack from './utils/clickTrack';
import handleTrackClick from './utils/handleTrackClick';

class Track extends Observer {
  view: View;

  track: HTMLElement;

  clickTrack: () => void;

  handleTrackClick: (event: PointerEvent) => void;

  private cursorOffset: number;

  constructor(view: View) {
    super();
    this.view = view;
    this.cursorOffset = 0;
    this.track = <HTMLElement>document.querySelector(`.${TRACK_CLASS}`);
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
