import Presenter from '../../Presenter';

function updateTipView(this: Presenter) {
  const stance = this.model.getActiveStance();
  const offset = this.model.getOffset()[stance];
  this.view.tipView.setOffset(stance, offset);
  this.view.tipView.updateTipStyle(stance);
}

export default updateTipView;
