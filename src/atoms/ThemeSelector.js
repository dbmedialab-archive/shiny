import React from 'react';
import PropTypes from 'prop-types';

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
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
	themeSlug: PropTypes.string,
};
ThemeSelector.defaultProps = {
	children: null,
	themeSlug: null,
};

export { ThemeSelector };
