import { Direction } from "../../../Interfaces/interfaces";
import Presenter from "../../Presenter";

const updateTrackFillModelState = function (
	this: Presenter,
	direction: Direction
) {
	this.trackModel.updateTrackFill(direction);
};

export default updateTrackFillModelState;
