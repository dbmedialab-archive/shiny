import React from 'react';
import { withTheme } from 'styled-components';

const ThemeName = withTheme(props => <span>{props.theme.name}</span>);

export default ThemeName;
