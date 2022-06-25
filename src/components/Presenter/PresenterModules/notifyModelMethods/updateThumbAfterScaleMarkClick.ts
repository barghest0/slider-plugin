import Presenter from 'components/Presenter/Presenter';

function updateThumbAfterScaleMarkClick(this: Presenter) {
  const cursorOffset = this.view.scaleView.getCursorOffset();
  this.model.updateThumbAfterClick(cursorOffset);
}

export default updateThumbAfterScaleMarkClick;
