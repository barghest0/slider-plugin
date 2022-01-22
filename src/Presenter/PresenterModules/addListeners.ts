import Presenter from '../Presenter';

const addListeners = function (this:Presenter,isRange: boolean) {
    this.view.thumbView.dragThumb(0);
    this.view.trackView.clickTrack();
    this.view.thumbView.dropThumb();
    if (isRange) {
        this.view.thumbView.dragThumb(1);
    }
};

export default addListeners;