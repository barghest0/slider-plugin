import { Direction } from "../../../GlobalUtils/interfaces";
import Presenter from "../../Presenter";


const updateThumbModel = function (this: Presenter, stance: number, cursorOffset: number, direction: Direction) {
    
    
    this.thumbs[stance].updateThumbValue(
        stance,
        this.view.ends,
        cursorOffset,
        direction,
    );

};

export default updateThumbModel;