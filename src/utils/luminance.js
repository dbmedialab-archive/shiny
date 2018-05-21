import parseColor from 'parse-color';

export const getLuminance = (color) => {
	const [r, g, b] = parseColor(color).rgb;

	// Calculate luminance (Y component of the YIQ color space)
	const y = ((r * 299) + (g * 587) + (b * 114)) / 1000;
	return y;
};

export const isBright = color => getLuminance(color) >= 150;
export const isDark = color => !isBright(color);
