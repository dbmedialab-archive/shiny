/* eslint-disable max-len */
import React from 'react';
import propTypes from 'prop-types';
import { injectGlobal } from 'react-emotion';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import { merge } from 'aurora-deep-slice-merge';

import defaultTheme from '../themes/default-theme';
import { themePropTypes } from '../themes/theme-prop-types';

/**
 * An extension of styled-component's ThemeProvider.
 *
 * Why do we need this, you might ask? In addition to what we
 * get from emotion-theming, this ThemeProvider:
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

	// Inject our theme's global styles
	injectGlobal`${mergedTheme.global}`;

	/**
	 * TODO: Make that inner div a React.Fragment
	 *
	 * aurora-frontend is still not on Fiber. ThemeProvider expects an only child.
	 */
	return (
		<EmotionThemeProvider theme={mergedTheme}>
			<div>
				{children}
			</div>
		</EmotionThemeProvider>
	);
};
ShinyThemeProvider.propTypes = {
	theme: propTypes.shape(themePropTypes),
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
