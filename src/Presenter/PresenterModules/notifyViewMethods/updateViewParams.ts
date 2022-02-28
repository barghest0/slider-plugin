import Presenter from '../../Presenter';

function updateViewParams(this: Presenter) {
  const params = this.model.getParams();
  this.view.setParams(params);
}

export default updateViewParams;
