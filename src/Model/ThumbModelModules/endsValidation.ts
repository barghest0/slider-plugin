import { Direction, Ends } from '../../Interfaces/interfaces';
import ThumbModel from '../ThumbModel';



const endsValidation = function (this: ThumbModel, ends: Ends, direction: Direction) {
    if (this.getOffset() > 100) {
        this.setOffset(100);
        this.setValue(direction === "horizontal" ? ends.max : ends.min);
    }
    if (this.getOffset() < 0) {
        this.setOffset(0);
        this.setValue(direction === "horizontal" ? ends.min : ends.max);
    }
};

export default endsValidation;