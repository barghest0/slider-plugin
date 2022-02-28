import Presenter from '../../Presenter';

function updateViewParams(this: Presenter) {
  const params = this.model.getParams();
  this.view.setParams(params);

  this.rerender(params);
}

export default updateViewParams;
