import React from 'react';
import propTypes from 'prop-types';

import { ShinyThemeProvider } from './ShinyThemeProvider';
import { themes } from '../themes';

const isClient = (typeof window !== 'undefined');

/**
 * A ThemeProvider that accepts a themeSlug instead of a theme.
 */
const ThemeSelector = ({ children, themeSlug }) => {
	const hasThemeStoredInBrowser = (isClient && window.localStorage && window.localStorage.getItem('theme'));
	const themeSlugFromLocalStorage = hasThemeStoredInBrowser ? window.localStorage.getItem('theme') : 'defaultTheme';

	// If the themeSlug was sent in, use it
	// Failing that, try localStorage
	const themeName = themeSlug ? themeSlug : themeSlugFromLocalStorage;

	// console.log(`Switching to the ${themeName} theme.`);
	// console.log('new theme', theme.name);

	return (
		<ShinyThemeProvider theme={themes[themeName]}>
			{children}
		</ShinyThemeProvider>
	);
};
ThemeSelector.propTypes = {
	children: propTypes.oneOfType([
		propTypes.arrayOf(propTypes.node),
		propTypes.node,
	]),
	themeSlug: propTypes.string,
};
ThemeSelector.defaultProps = {
	children: null,
	themeSlug: null,
};

export { ThemeSelector };
