import Thumb from '../Thumb';
import handleDrag from './handleDrag';



const dragThumb = function (this: Thumb, stance: number) {
    
    $(this.view.root).on(
        "mousedown",
        `.slider__thumb-${stance}`,
        (event: JQuery.MouseDownEvent) => {
            console.log(2);
            
            event.preventDefault();
            event.stopPropagation();
            $(document).on(
                "mousemove",
                {
                    thisThumb: this,
                    stance,
                },
                handleDrag
            );
        }
    );

    $(this.view.root).on(
        "touchstart",
        `.slider__thumb-${stance}`,
        (event: JQuery.TouchStartEvent) => {
            event.preventDefault();
            event.stopPropagation();
            $(document).on(
                "touchmove",
                {
                    thisThumb: this,
                    stance,
                },
                handleDrag
            );
        }
    );
};

export default dragThumb;