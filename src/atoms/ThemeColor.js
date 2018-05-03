import React from 'react';
import { withTheme } from 'styled-components';
import { getColor } from '../utils';

const ThemeColor = withTheme(props => <meta name="theme-color" value={getColor('splashColor')} />);

export { ThemeColor };
