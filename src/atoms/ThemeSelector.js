import React from 'react';
import propTypes from 'prop-types';
import { ThemeProvider, injectGlobal } from 'styled-components';
import { merge } from 'aurora-deep-slice-merge';

import { themes } from '../themes';

const isClient = (typeof window !== 'undefined');

injectGlobal`
	/* Font reset: 1rem = 10px */
	html {
		font-size: 62.5%;
	}
	body {
		font-size: 1.6rem;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure,
	footer, header, hgroup, menu, nav, section, main {
    	display: block;
	}
`;

/**
 * An extension of styled-component's ThemeProvider.
 *
 * Why do we need this, you might ask? In addition to what we
 * get from styled-components, this ThemeProvider:
 * - allows us to pass in the name of the theme instead of the theme itself
 * - deep merges our theme with the default theme
 * - injects our theme's global styles
 */
const ThemeSelector = ({ children, themeSlug }) => {
	const hasThemeStoredInBrowser = (isClient && window.localStorage && window.localStorage.getItem('theme'));
	const themeSlugFromLocalStorage = hasThemeStoredInBrowser ? window.localStorage.getItem('theme') : 'defaultTheme';

	// If the themeSlug was sent in, use it
	// Failing that, try localStorage
	const themeName = themeSlug ? themeSlug : themeSlugFromLocalStorage;

	// Deep merge the chosen theme with our default theme.
	// This way, we can always assume that every property
	// in the default theme will have a value
	// no matter which theme we are using
	const theme = merge(themes.defaultTheme, themes[themeName]);

	// console.log(`Switching to the ${themeName} theme.`);
	// console.log('new theme', theme.name);

	// Inject our theme's global styles
	injectGlobal`${theme.global}`;

	/**
	 * TODO: Make that inner div a React.Fragment
	 *
	 * aurora-frontend is still not on Fiber. ThemeProvider expects an only child.
	 */
	return (
		<ThemeProvider theme={theme}>
			<div>
				{children}
			</div>
		</ThemeProvider>
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
