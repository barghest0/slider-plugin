import Presenter from '../../Presenter';

function updateThumbView(this: Presenter, stance: number) {
  const offset = this.model.getOffset()[stance];

  this.view.thumbView.setOffset(offset, stance);

  this.view.thumbView.updateThumbStyle(stance);
  this.view.thumbView.activeStance = stance;
}

export default updateThumbView;
