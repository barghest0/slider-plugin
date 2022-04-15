import Track from '../Track';

function clickTrack(this: Track) {
  this.view.DOMroot.addEventListener('pointerdown', this.handleTrackClick);
}

export default clickTrack;
