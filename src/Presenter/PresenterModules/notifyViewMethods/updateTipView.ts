import Presenter from '../../Presenter';

function updateTipView(
  this: Presenter,
  stance: number,
  value: number,
  offset: number,
) {
  this.view.tipView.setOffset(offset, stance);
  this.view.tipView.setValue(value, stance);
  this.view.tipView.updateTipStyle(stance);
}

export default updateTipView;
