import Presenter from '../../Presenter';

function updateThumb(this: Presenter) {
  const stance = this.view.thumbView.getActiveStance();
  const cursorOffset = this.view.thumbView.getCursorOffset();
  this.model.updateThumb(stance, cursorOffset);
}

export default updateThumb;
