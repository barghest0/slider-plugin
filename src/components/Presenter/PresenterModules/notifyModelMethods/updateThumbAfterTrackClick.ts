import Presenter from 'components/Presenter';

function updateThumbAfterTrackClick(this: Presenter) {
  const cursorOffset = this.view.trackView.getCursorOffset();
  this.model.updateThumbAfterTrackClick(cursorOffset);
}

export default updateThumbAfterTrackClick;
