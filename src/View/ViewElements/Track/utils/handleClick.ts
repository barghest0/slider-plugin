import Track from '../Track'


const handleClick = function (e: JQuery.MouseDownEvent) {
    const cursorPosition = {
        x: e.pageX - $(".slider").position().left,
        y: e.pageY - $(".slider").position().top,
    }
    const { stance, thisTrack } = e.data
    if (thisTrack.parentElement.direction === "horizontal") {
        $(`.slider__thumb-${stance}`).css({ left: cursorPosition.x })
        $(`.slider__fill-${thisTrack.parentElement.direction}`).css({ width: cursorPosition.x })
    } else {
        $(`.slider__thumb-${stance}`).css({ top: cursorPosition.y })
        $(`.slider__fill-${thisTrack.parentElement.direction}`).css({ height: cursorPosition.y })
    }

}


export default handleClick