import Track from '../Track'


const handleClick = function (e: JQuery.MouseDownEvent) {
    const { stance, thisTrack } = e.data
    
    let value = thisTrack.parentElement.thumbView.value
    
    console.log(value);
    
    let left =
		((e.pageX - $(".slider").position().left) /
			thisTrack.parentElement.size.width) *
        100
 

    let stepLeft =
    Math.round(left / thisTrack.parentElement.thumbView.stepPercent) * thisTrack.parentElement.thumbView.stepPercent
    
    let result =
    (stepLeft / thisTrack.parentElement.thumbView.stepPercent) * thisTrack.parentElement.thumbView.step.toFixed()

    thisTrack.notify("UpdateThumbModelState", result, stance)
    

    $(`.slider__thumb-${stance}`).css({ left: value[stance] / (thisTrack.parentElement.ends.max / 100) + '%' })

    let deltaWidth =
		parseInt($(`.slider__thumb-1`).css('left'), 10) -
        parseInt($(`.slider__thumb-0`).css('left'), 10)
        
    let thumbOffset = parseInt($(`.slider__thumb-0`).css('left'), 10)



    $(`.slider__fill-${thisTrack.parentElement.direction}`).css({ 
            width: deltaWidth + 'px' ,
            left: thumbOffset+'px'
        })
    
    //  else {
    //     $(`.slider__thumb-${stance}`).css({ top: cursorPosition.y })
    //     $(`.slider__fill-${thisTrack.parentElement.direction}`).css({ height: cursorPosition.y })
    // }

   

}


export default handleClick