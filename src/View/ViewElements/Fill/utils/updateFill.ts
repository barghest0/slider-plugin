import { Direction } from '../../../../Interfaces/interfaces';
import Fill from '../Fill';



const updateFill = function (this: Fill, direction: Direction) {
    this.view.trackView.notify("UpdateTrackModelFill", direction);
    
    if (this.view.isRange) {
        $(`${this.view.root} .slider__fill_${direction}`).css({
            [this.view.offsetDirection]:
                this.offset + "%",
            [this.view.fillDirection]: this.size + "%",
        });
    } else {
        $(`${this.view.root} .slider__fill_${direction}`).css({
            [this.view.fillDirection]: this.size + "%",
        });
    }
};

export default updateFill;