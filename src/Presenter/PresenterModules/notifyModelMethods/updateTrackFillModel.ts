import { Direction } from "../../../Interfaces/interfaces";
import Presenter from "../../Presenter";

const updateTrackFillModel = function (
	this: Presenter,
	direction: Direction
) {
	this.trackModel.updateTrackFill(direction);
};

export default updateTrackFillModel;
