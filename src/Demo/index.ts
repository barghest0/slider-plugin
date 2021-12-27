import "../Style/style.scss";
import PreviewSlider from "./PriviewSlider";

new PreviewSlider(".slider-1", {
	min: -100,
	max: 100,
	step: 20,
	value: [-50, 50],
	isRange: false,
	direction: "horizontal",
	hasFill: true,
	hasTips: true,
});

// new PreviewSlider(".slider-2", {
// 	min: 0,
// 	max: 200,
// 	step: 20,
// 	value: [10, 150],
// 	isRange: true,
// 	direction: "horizontal",
// });
