import Presenter from '../Presenter';

const addListeners = function (this: Presenter, isRange: boolean) {
    this.view.thumbView.dragAndDropThumb(0);
    this.view.trackView.clickTrack();
    if (isRange) {
        this.view.thumbView.dragAndDropThumb(1);
    }
};

export default addListeners;