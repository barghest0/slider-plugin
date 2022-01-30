import { Direction } from '../../../GlobalUtils/interfaces';
import View from '../../View';
import handleClick from './utils/handleClick';
import Observer from '../../../Observer/Observer';

class Track extends Observer {
  public view: View;
  public track: HTMLElement | null;

  constructor(view: View) {
    super();
    this.view = view;
    this.track = null;
  }

  public createTrack(direction: Direction) {
    const track = document.createElement('div');
    track.classList.add('slider__track');
    track.classList.add(`slider__track_${direction}`);
    track.dataset.testid = `test-track`;
    this.track = track;
    this.view.DOMroot?.appendChild(track);
  }

  public clickTrack() {
    this.view.DOMroot!.addEventListener('mousedown', (e) => handleClick(e, this));
  }
}

export default Track;
