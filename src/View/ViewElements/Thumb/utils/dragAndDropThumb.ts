import Thumb from '../Thumb';
import handleDrag from './handleDrag';



const dragAndDropThumb = function (this: Thumb, stance: number) {
    const rootElement = document.querySelector(this.view.root);
    const handleMouseMove = (e: any) => {
        handleDrag(e, { thisThumb: this, stance });
    };
    const handleMouseDown = (event: any) => {
        event.preventDefault();
        event.stopPropagation();
        document.addEventListener('mousemove', handleMouseMove);
    };

    rootElement!.querySelector(`.slider__thumb-${stance}`)!.addEventListener('mousedown', handleMouseDown);

    document.addEventListener("mouseup", () => {
        document.removeEventListener('mousemove', handleMouseMove);
    });
};

export default dragAndDropThumb;