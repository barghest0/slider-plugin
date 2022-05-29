import Presenter from 'components/Presenter';

function updateFillView(this: Presenter) {
  const state = this.model.getFillState();
  this.view.fillView.setState(state);
  this.view.fillView.updateFillStyle();
}

export default updateFillView;
