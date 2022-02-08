import Presenter from '../Presenter';

function removeListeners(this: Presenter) {
	$(this.root).off();
}

export default removeListeners;
