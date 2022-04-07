import View from '../../View';
import Observer from '../../../Observer/Observer';

import { Direction } from '../../../Slider/types';

import { TRACK_CLASS } from './constants';

import handleTrackClick from './utils/handleTrackClick';
import { PREFIX } from '../../../Slider/constants';

class Track extends Observer {
  public view: View;

  public track: HTMLElement;

  constructor(view: View) {
    super();
    this.view = view;
    this.track = <HTMLElement>document.querySelector(`.${TRACK_CLASS}`);
  }

  public renderTrack(direction: Direction) {
    const track = document.createElement('div');
    track.classList.add(TRACK_CLASS);
    track.classList.add(`${PREFIX}-${TRACK_CLASS}`);
    track.classList.add(`${TRACK_CLASS}_${direction}`);
    this.track = track;
    this.view.DOMroot.appendChild(track);
  }

  public clickTrack() {
    this.view.DOMroot.addEventListener('pointerdown', event =>
      handleTrackClick(event, this),
    );
  }
}

export default Track;
