import "../Style/style.scss";
import Presenter from "../Presenter/Presenter";
import PreviewSlider from "./PriviewSlider";

new PreviewSlider(".slider-1", {
	min: 0,
	max: 200,
	step: 20,
	value: [10, 150],
	isRange: true,
	direction: "horizontal",
});

// new PreviewSlider(".slider-2", {
// 	min: 0,
// 	max: 200,
// 	step: 20,
// 	value: [10, 150],
// 	isRange: true,
// 	direction: "horizontal",
// });
