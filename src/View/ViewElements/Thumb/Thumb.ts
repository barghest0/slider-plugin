import View from "../../View"

class Thumb {
	private parentElement: View
	private thumb: JQuery<HTMLElement>
	constructor(parentElement: View) {
		this.parentElement = parentElement
		this.thumb = $(".slider__thumb")
	}
	public createThumb() {
		this.parentElement.parent.append('<div class="slider__thumb"></div>')
	}

	public dragThumb() {


		this.parentElement.parent.on(
			"mousedown",
			{ track: '.slider__track', thumb: '.slider__thumb' },
			(event: JQuery.MouseDownEvent) => {
				$('body').on('mousemove', (e: JQuery.MouseMoveEvent) => {

					const cursorPosition = {
						x: e.pageX - $(event.currentTarget).position().left
					}
					
					if (cursorPosition.x <= event.currentTarget.offsetWidth && cursorPosition.x >= 0) {
						$(event.data.thumb).css({ left: cursorPosition.x })
						$('.slider__fill').css({ width: cursorPosition.x })
					}



				})

			}
		)

		$('body').on('mouseup', (event: JQuery.MouseUpEvent) => {
			$('body').off('mousemove')
		})
	}
}

export default Thumb
