import Track from '../Track';

function clickTrack(this: Track) {
  this.view.DOMroot.addEventListener('pointerdown', event =>
    this.handleTrackClick(event),
  );
}

export default clickTrack;
