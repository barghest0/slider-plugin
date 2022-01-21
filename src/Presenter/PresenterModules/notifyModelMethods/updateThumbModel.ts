import { Direction } from "../../../Interfaces/interfaces";
import Presenter from "../../Presenter";


const updateThumbModel = function (this: Presenter, stance: number, cursorCoordinate: number, direction: Direction, size: number) {
    this.thumbs[stance].updateThumbValue(
        stance,
        this.view.ends,
        cursorCoordinate,
        direction,
        size
    );
    this.view.thumbView.activeStance = stance;
};

export default updateThumbModel;