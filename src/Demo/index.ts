import "../Style/style.scss";
import Presenter from "../Presenter/Presenter";
import PreviewSlider from "./PriviewSlider";

new PreviewSlider(".slider-1", {
	min: 0,
	max: 200,
	step: 10,
	value: [0, 150],
	isRange: false,
	direction: "horizontal",
});

// new Presenter(".slider-2", {
// 	min: 0,
// 	max: 200,
// 	step: 10,
// 	value: [10, 150],
// 	isRange: true,
// 	direction: "horizontal",
// })
