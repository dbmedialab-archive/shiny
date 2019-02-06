/* eslint-disable max-len */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/core';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import merge from 'deepmerge';

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
	const GlobalStyles = () => <Global styles={`${mergedTheme.global}`} />;

	/**
	 * TODO: Make that inner div a React.Fragment
	 *
	 * aurora-frontend is still not on Fiber. ThemeProvider expects an only child.
	 */
	return (
		<EmotionThemeProvider theme={mergedTheme}>
			<Fragment>
				<GlobalStyles />
				{children}
			</Fragment>
		</EmotionThemeProvider>
	);
};
ShinyThemeProvider.propTypes = {
	theme: PropTypes.shape(themePropTypes),
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
};
ShinyThemeProvider.defaultProps = {
	children: null,
	theme: {},
};

export { ShinyThemeProvider };
