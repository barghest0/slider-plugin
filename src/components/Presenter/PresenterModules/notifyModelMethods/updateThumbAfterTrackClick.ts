import Presenter from '../../Presenter';

function updateThumbAfterTrackClick(this: Presenter, cursorOffset: number) {
  this.model.updateThumbAfterTrackClick(cursorOffset);
}

export default updateThumbAfterTrackClick;
