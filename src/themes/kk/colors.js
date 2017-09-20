import { darken, lighten } from 'polished';

const colorsToShade= {
  primary: 'black',
  secondary: '#999',
  pink: 'hotpink',
};

const shadedColors = Object.keys(colorsToShade).map(color => ({
  [`${color}`]: colorsToShade[color],
  [`${color}Dark`]: darken(0.1, colorsToShade[color]),
  [`${color}Light`]: lighten(0.15, colorsToShade[color]),
  [`${color}Lighter`]: lighten(0.3, colorsToShade[color]),
}));

const combinedShadedColors = shadedColors.reduce((acc, cur) => Object.assign(acc, cur), {});

const colors = {
  ...combinedShadedColors,
};

export default colors;
