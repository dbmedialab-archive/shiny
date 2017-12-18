import React from 'react';
import propTypes from 'prop-types';
import { ThemeProvider, injectGlobal } from 'styled-components';
import { merge } from 'aurora-deep-slice-merge';

import { GlobalStyle } from '../atoms/GlobalStyle';
import { themes } from '../themes';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700,800');
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700,800');
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700,800');

  html {
    font-size: 62.5%;
  }
  body {
    font-size: 1.6rem;
  }
`;

const ThemeSelector = ({ children, themeSlug }) => {
	let theme = themes.defaultTheme;
	let Global = GlobalStyle;

	const hasThemeStoredInBrowser = (window && window.localStorage && window.localStorage.getItem('theme'));

	const themeName = themeSlug
		? themeSlug
		: (hasThemeStoredInBrowser
			? window.localStorage.getItem('theme')
			: ''
		);

	if (themeName) {
		theme = merge(themes.defaultTheme, themes[themeName]);

		// console.log(`Switching to the ${themeName} theme.`);
		// console.log('new theme', theme);

		if (theme && theme.global) {
			Global = GlobalStyle.extend`${theme.global};`;
		}
	}

	return (
		<ThemeProvider theme={theme}>
			<Global>{children}</Global>
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
