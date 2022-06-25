import Presenter from 'components/Presenter/Presenter';

function updateThumbAfterTrackClick(this: Presenter) {
  const cursorOffset = this.view.trackView.getCursorOffset();
  this.model.updateThumbAfterClick(cursorOffset);
}

export default updateThumbAfterTrackClick;
