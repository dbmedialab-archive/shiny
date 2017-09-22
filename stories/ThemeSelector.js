import React from 'react';
import propTypes from 'prop-types';
import { ThemeProvider, injectGlobal } from 'styled-components';
import { merge } from 'aurora-deep-slice-merge';

import GlobalStyle from '../src/atoms/GlobalStyle';
import themes from '../src/themes';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700,800');

  html {
    font-size: 62.5%;
  }
  body {
    font-size: 1.6rem;
  }
`;

const ThemeSelector = ({ children }) => {
  let theme = themes.defaultTheme;
  let Global = GlobalStyle;

  if (window.localStorage && window.localStorage.getItem('theme')) {
    const themeName = window.localStorage.getItem('theme');

    if (themeName) {
      theme = merge(themes.defaultTheme, themes[themeName]);

      console.log(`Switching to the ${themeName} theme.`);
      console.log('new theme', theme);

      if (theme && theme.global) {
        Global = GlobalStyle.extend`${theme.global};`;
      }
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Global>{children}</Global>
    </ThemeProvider>
  );
};
ThemeSelector.propTypes = {
  children: propTypes.oneOf([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
};
ThemeSelector.defaultProps = {
  children: null,
};

export default ThemeSelector;
