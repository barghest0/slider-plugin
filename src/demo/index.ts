import "../Style/style.scss"
import Presenter from "../Presenter/Presenter"

new Presenter(".slider", {
	min: 0,
	max: 200,
	step: 10,
	value: 100,
	isRange: false,
	direction: "vertical",
})
