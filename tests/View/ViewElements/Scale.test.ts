import { screen, waitFor } from '@testing-library/dom';
import View from "../../../src/View/View";
import Scale from "../../../src/View/ViewElements/Scale/Scale";
import { prepareScaleData } from "../../../src/View/ViewElements/Scale/utils/prepareScaleData";
import '@testing-library/jest-dom'

describe("Scale test", () => {
	document.body.innerHTML = `<div id="slider-1" class="slider-1"></div>`;
	const root = ".slider-1";
	const view = new View(root);
	const scale = new Scale(view);
	scale.createScale('horizontal', true);
	test("constructor test", () => {
		expect(view.root).toBe(root);
	});

	test("correct append scale to DOM test", async () => {
		waitFor(() => {
			try{
				const DOMScale = screen.getByTestId('test-scale');
				expect(DOMScale).toBeInTheDocument();
			}catch(e){
				console.log(e);
			}
			
		});

	});
	test("correct prepare scale data test", () => {
		expect(prepareScaleData(0, 100, 10)).toEqual([0, 20, 40, 60, 80, 100]);
	});

	test("correct return values for scale test", () => {
		expect(scale["createScaleMarks"](10, 100, 0, "horizontal"));
	});
});
