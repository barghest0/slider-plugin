import Thumb from './ViewElements/Thumb/Thumb'

class View {
	private sliderClass: string
	private thumb: any
	constructor(sliderClass: string) {
		this.sliderClass = sliderClass
		this.thumb = new Thumb(sliderClass)
	}

	private viewThumb() {
		this.thumb.createThumb()
		this.thumb.dragThumb()
	}


}

export default View
