import { unshadeColorString } from './unshade-color-string';
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
export const getColor = (color, shade=null) => (props) => {
	const colorString = (props.theme.colors.skinColors[color]) ? (props.theme.colors.skinColors[color]) : color;
	const capShade = shade !== null ? shade.slice(0, 1).toUpperCase() + shade.slice(1) : '';
	const shadedColorString = shade !== null ? unshadeColorString(colorString) + capShade : colorString;

	return props.theme.colors[shadedColorString];
};
