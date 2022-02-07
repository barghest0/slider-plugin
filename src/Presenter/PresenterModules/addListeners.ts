import { FIRST_THUMB_STANCE, SECOND_THUMB_STANCE } from '../../utils/constants';
import Presenter from '../Presenter';

const addListeners = function (this: Presenter, isRange: boolean) {
    this.view.thumbView.dragAndDropThumb(FIRST_THUMB_STANCE);
    this.view.trackView.clickTrack();
    if (isRange) {
        this.view.thumbView.dragAndDropThumb(SECOND_THUMB_STANCE);
    }
};

export default addListeners;