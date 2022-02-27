import Presenter from '../Presenter';

function removeListeners(this: Presenter) {
  $(this.DOMroot.classList[0]).off();
}

export default removeListeners;
