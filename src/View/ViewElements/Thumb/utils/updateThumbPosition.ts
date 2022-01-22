import { Direction } from '../../../../Interfaces/interfaces';
import Thumb from '../Thumb';



const updateThumbPosition = function (this: Thumb, offset: number, stance: number) {
    $(`${this.view.root} .slider__thumb-${stance}`).css({
        [this.view.offsetDirection]: offset + "%",
    });
};

export default updateThumbPosition;