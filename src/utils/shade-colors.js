import { darken, lighten } from 'polished';
/**
 * Create a function that creates 4 shades of each color in colorsToShade including original color.
 * For example: primary becomes primary, primaryDark, primaryLight and primaryLighter
 * Returns an object that consist original color and shades for each color in colorsToShade
 * @param colorsToShade object {colorName: 'hex color', ...}.
 * @param shadeScheme object {dark: amount, light: amount, lighter: amount}, where amount - amount of lightening or darkening
 * @returns object {colorName: 'hex color', colorNameDark: 'hex color', colorNameLight: 'hex color', colorNameLighter: 'hex color'... }
 */
const defaultShadeScheme = {
	dark: 0.2,
	light: 0.15,
	lighter: 0.3,
};

export const shadeColors = (colorsToShade, shadeScheme=defaultShadeScheme) => {
	const shadedColors = Object.keys(colorsToShade).map(color => ({
		[`${color}`]: colorsToShade[color],
		[`${color}Dark`]: darken(shadeScheme.dark, colorsToShade[color]),
		[`${color}Light`]: lighten(shadeScheme.light, colorsToShade[color]),
		[`${color}Lighter`]: lighten(shadeScheme.lighter, colorsToShade[color]),
	}));

	return shadedColors.reduce((acc, cur) => Object.assign(acc, cur), {});
};
