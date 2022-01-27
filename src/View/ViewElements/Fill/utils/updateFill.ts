import { Direction } from '../../../../GlobalUtils/interfaces';
import Fill from '../Fill';



const updateFill = function (this: Fill, direction: Direction) {

    if (this.view.isRange) {
        $(`${this.view.root} .slider__fill_${direction}`).css({
            [this.view.offsetDirection]:
                this.getOffset() + "%",
            [this.view.fillDirection]: this.getSize() + "%",
        });
    } else {
        $(`${this.view.root} .slider__fill_${direction}`).css({
            [this.view.fillDirection]: this.getSize() + "%",
        });
    }
};

export default updateFill;