import Track from '../Track';

function clickTrack(this: Track) {
  this.track.addEventListener('pointerdown', this.handleTrackClick);
}

export default clickTrack;
