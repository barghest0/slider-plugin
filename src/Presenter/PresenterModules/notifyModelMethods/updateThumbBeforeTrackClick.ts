import Presenter from '../../Presenter';

function updateThumbBeforeTrackClick(this: Presenter, cursorOffset: number) {
  this.model.updateThumbBeforeTrackClick(cursorOffset);
}

export default updateThumbBeforeTrackClick;
