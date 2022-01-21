import { Direction } from '../../../../Interfaces/interfaces';
import Thumb from '../Thumb';



const updateThumbPosition = function (this: Thumb, stance: number, offset: number[]) {
    $(`${this.view.root} .slider__thumb-${stance}`).css({
        [this.view.offsetDirection]: offset[stance] + "%",
    });
};

export default updateThumbPosition;