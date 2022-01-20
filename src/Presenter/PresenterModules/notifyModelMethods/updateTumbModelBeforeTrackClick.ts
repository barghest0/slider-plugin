import Presenter from "../../Presenter";

const updateThumbModelBeforeTrackClick = function(this:Presenter, cursorCoordinate: number) {
    this.trackModel.prepareChooseStance(cursorCoordinate);
}

export default updateThumbModelBeforeTrackClick