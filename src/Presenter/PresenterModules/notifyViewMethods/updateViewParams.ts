import Presenter from '../../Presenter';

function updateViewParams(this: Presenter) {
  const params = this.model.getParams();
  this.view.setParams(params);
  console.log(this.view.getParams());
}

export default updateViewParams;
