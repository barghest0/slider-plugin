import { Direction } from '../../../Interfaces/interfaces';
import View from '../../View';
import updateTipsPosition from './utils/updateTipsPosition';


class Tip {
    public parentElement: View;
    public updateTipsPosition: (stance: number, direction: Direction) => void;
    constructor(parentElement: View) {
        this.parentElement = parentElement;
        this.updateTipsPosition = updateTipsPosition.bind(this);
    }

    public createTip(direction: Direction, stance: number) {
        this.parentElement.parent.append(
            `<div class="slider__tip slider__tip-${stance} slider__tip_${direction}"></div>`
        );
    }
}



export default Tip;
