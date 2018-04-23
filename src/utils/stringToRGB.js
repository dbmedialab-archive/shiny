/**
 *  Create a function that converts any string to RGB components
 *
 * Usage:
 * getColor('primary')              // returns a function that resolves props to the primary color from your theme
 * getColor('primaryDark')          // returns a function that resolves props to the primaryDark color from your theme
 *
 * @param color string The color you want to display, must exist in your theme's skinColors or colors object, e.g. 'primary'
 * @param shade oneOf(['', 'dark', 'light', 'lighter']) Override the shade of your color
 * @returns Object A function that resolves props to a css color string, e.g. props => '#333333'
 */
const hexToRGB = (color) => {
	const r = parseInt(color.substr(1, 2), 16);
	const g = parseInt(color.substr(3, 2), 16);
	const b = parseInt(color.substr(5, 2), 16);

	return { r, g, b };
};

const rgbaToRGBA = (color) => {
	const rgba = color.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+)\s*)?\)?/i);

	const r = parseInt(rgba[2]);
	const g = parseInt(rgba[3]);
	const b = parseInt(rgba[4]);
	const a = parseFloat(rgba[5]).toFixed(2);

	return {
		r, g, b, a,
	};
};

const stringToRGB = (color) => {
	if (color.substr(0, 1) === '#') {
		return hexToRGB(color);
	}
	return rgbaToRGBA(color);
};

export { stringToRGB };
