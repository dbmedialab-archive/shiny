/* eslint-disable max-len */
import React from 'react';
import propTypes from 'prop-types';
import { ThemeProvider as StyledComponentsThemeProvider, injectGlobal, css } from 'styled-components';
import { merge } from 'aurora-deep-slice-merge';

import defaultTheme from '../themes/default-theme';
import { themePropTypes } from '../themes/theme-prop-types';

// @TODO: Switch to a proper CSS reset, like this one in utils:
// import { cssReset } from '../utils';
const cssReset = css`
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
 * - deep merges our theme with the default theme
 * - injects our theme's global styles
 */
const ShinyThemeProvider = ({ children, theme }) => {
	// Deep merge the chosen theme with our default theme.
	// This way, we can always assume that every property
	// in the default theme will have a value
	// no matter which theme we are using
	const mergedTheme = merge(defaultTheme, theme);

	// console.log(`Switching to the ${themeName} theme.`);
	// console.log('new theme', theme.name);

	// Inject
	// - Reset styles
	// - Our theme's global styles
	injectGlobal`${cssReset}`;
	injectGlobal`${mergedTheme.global}`;

	/**
	 * TODO: Make that inner div a React.Fragment
	 *
	 * aurora-frontend is still not on Fiber. ThemeProvider expects an only child.
	 */
	return (
		<StyledComponentsThemeProvider theme={mergedTheme}>
			<div>
				{children}
			</div>
		</StyledComponentsThemeProvider>
	);
};
ShinyThemeProvider.propTypes = {
	theme: themePropTypes,
	children: propTypes.oneOfType([
		propTypes.arrayOf(propTypes.node),
		propTypes.node,
	]),
};
ShinyThemeProvider.defaultProps = {
	children: null,
	theme: {},
};

export { ShinyThemeProvider };
