/* eslint-disable max-len */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import merge from 'deepmerge';

import { getColor, getVariable } from '../utils';
import defaultTheme from '../themes/default-theme';
import { themePropTypes } from '../themes/theme-prop-types';

const GlobalStyles = createGlobalStyle`
	${props => props.theme.global}

	body {
		background: ${props => getColor('background')(props)};
		color: ${props => getColor('type')(props)};
		font-family: ${props => getVariable('mainFont')(props)};
		font-size: ${props => getVariable('uiRegularSize')(props)};
		line-height: ${props => getVariable('uiRegularLineHeight')(props)};
		font-weight: ${props => getVariable('uiWeight')(props)};
	}
`;

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

	/**
	 * TODO: Make that inner div a React.Fragment
	 *
	 * aurora-frontend is still not on Fiber. ThemeProvider expects an only child.
	 */
	return (
		<StyledComponentsThemeProvider theme={mergedTheme}>
			<Fragment>
				<GlobalStyles theme={mergedTheme} />
				{children}
			</Fragment>
		</StyledComponentsThemeProvider>
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
