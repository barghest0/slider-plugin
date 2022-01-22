import Presenter from "../../Presenter";

const updateThumbModelBeforeTrackClick = function (this: Presenter, cursorOffset: number) {
    this.trackModel.prepareChooseStance(cursorOffset);
};

export default updateThumbModelBeforeTrackClick;