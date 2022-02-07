import Presenter from '../Presenter';

const removeListeners = function (this: Presenter) {
	$(this.root).off();
};

export default removeListeners;
