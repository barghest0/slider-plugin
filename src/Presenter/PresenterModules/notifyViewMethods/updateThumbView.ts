import Presenter from '../../Presenter';

function updateThumbView(
  this: Presenter,
  stance: number,
  value: number,
  offset: number,
) {
  this.view.thumbView.setOffset(offset, stance);
  this.view.setValue(stance, value);
  this.view.thumbView.updateThumbStyle(stance);
  this.view.thumbView.activeStance = stance;
}

export default updateThumbView;
