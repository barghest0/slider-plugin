import Presenter from '../../Presenter';

function updateTipView(this: Presenter, stance: number, offset: number) {
  this.view.tipView.setOffset(offset, stance);
  this.view.tipView.updateTipStyle(stance);
}

export default updateTipView;
