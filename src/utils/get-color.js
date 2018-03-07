/**
 * Create a function that looks up a color from your theme.
 *
 * Returns a function that looks up a skinColor, and returns it if it exists.
 * If the skinColor does not exist, the functions returns a color directly
 * from the palette.
 */
export const getColor = color => props => (
	props.theme.colors[props.theme.colors.skinColors[color]] || props.theme.colors[color]
);
