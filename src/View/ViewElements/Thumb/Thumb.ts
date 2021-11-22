class Thumb {
	private parentSlider: any
	constructor(parentSlider: string) {
		this.parentSlider = parentSlider
	}
	private createThumb() {
		$(this.parentSlider).append('<div class="slider__thumb"></div>')
	}

	private dragThumb() {
		console.log($(this.parentSlider).width());
		
	}
}





export default Thumb