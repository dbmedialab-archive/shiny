import { unshadeColorString } from '.';

/**
 * Create a function that looks up a color from your theme.
 *
 * Returns a function that looks up a skinColor, and returns it if it exists.
 * If the skinColor does not exist, the functions returns a color directly
 * from the palette.
 *
 * You can use this factory in a styled-components tagged template literal.
 *
 * If you specify a shade (dark, light, lighter) as the second
 * argument, we will strip any existing color shade from the
 * first argument, and then apply the one from the second argument.
 *
 * Usage:
 * getColor('primary')              // returns a function that resolves props to the primary color from your theme
 * getColor('primaryDark')          // returns a function that resolves props to the primaryDark color from your theme
 * getColor('primary', 'light')     // returns a function that resolves props to the primaryLight color from your theme
 * getColor('primaryDark', 'light') // returns a function that resolves props to the primaryLight color from your theme
 *
 * @param color string The color you want to display, must exist in your theme's skinColors or colors object, e.g. 'primary'
 * @param shade oneOf(['', 'dark', 'light', 'lighter']) Override the shade of your color
 * @returns function A function that resolves props to a css color string, e.g. props => '#333333'
 */
export const getColor = (color, shade='') => (props) => {
	const capShade = shade.slice(0, 1).toUpperCase() + shade.slice(1);
	const colorString = (props.theme.colors.skinColors[color]) ?(props.theme.colors.skinColors[color]) : color;
	const shadedColorString = shade ? unshadeColorString(colorString) + capShade : color;

	return props.theme.colors[shadedColorString];
};
