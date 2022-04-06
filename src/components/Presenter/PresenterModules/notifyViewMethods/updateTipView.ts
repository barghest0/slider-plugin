import Presenter from '../../Presenter';

function updateTipView(this: Presenter, stance: number) {
  const offset = this.model.getOffset()[stance];
  this.view.tipView.setOffset(stance, offset);
  this.view.tipView.updateTipStyle(stance);
}

export default updateTipView;
