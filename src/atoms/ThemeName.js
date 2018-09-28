import React from 'react';
import { withTheme } from 'emotion-theming';

const ThemeName = withTheme(props => <span>{props.theme.name}</span>);

export { ThemeName };
