import Thumb from '../Thumb';



const dropThumb = function (this: Thumb) {
    $(document).on("mouseup", () => {
        $(document).off("mousemove");
    });
    $(this.view.root).on("mouseup", () => {
        $(this.view.root).off("mousemove");
    });
    $(document).on("touchend", () => {
        $(document).off("touchmove");
    });
    $(this.view.root).on("touchend", () => {
        $(this.view.root).off("touchmove");
    });
};


export default dropThumb;