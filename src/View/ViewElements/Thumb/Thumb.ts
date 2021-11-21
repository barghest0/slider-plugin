class Thumb {
	private parentSlider: any
	constructor(parentSlider: string) {
		this.parentSlider = parentSlider
	}
	private createThumb() {
		$(this.parentSlider).append('<div class="slider__thumb"></div>')
	}

	private dragThumb() {


	}
}




// $(this.parentSlider).on('mousedown',
// 			(event) => {
// 				const slider = $(this.parentSlider)
// 				const thumb = $(slider.children()[0])
// 				const moveAt = (e: any) => {
// 					thumb.css({ left: ` ${e.pageX}px` })
// 				}
// 				document.onmousemove = (e) => {
// 					moveAt(e)
// 				}
// 				thumb.on('mouseup', (e) => {
// 					document.onmousemove = null
// 				})

// 			})
export default Thumb