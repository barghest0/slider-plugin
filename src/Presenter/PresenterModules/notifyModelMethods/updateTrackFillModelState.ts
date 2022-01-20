import Presenter from "../../Presenter";


const updateTrackFillModelState = function(this:Presenter) {
    this.trackModel.updateTrackFill(this.view.direction);
}

export default updateTrackFillModelState