import { darken, lighten } from 'polished';

const colorsToShade= {
  primary: '#0000ff',
  secondary: '#ECECEC',
  pink: '#F35D67',
  purple: '#5C3393',
  blue: '#23ACCC',
  teal: '#569091',
  green: '#8ABA56',
  yellow: '#F1CA3F',
  orange: '#E87E0A',
  navy: '#1C1837',
  burgundy: '#862547',
  brown: '#9a663f', // borrowed sols brown
};

const shadedColors = Object.keys(colorsToShade).map(color => ({
  [`${color}`]: colorsToShade[color],
  [`${color}Dark`]: darken(0.2, colorsToShade[color]),
  [`${color}Light`]: lighten(0.15, colorsToShade[color]),
  [`${color}Lighter`]: lighten(0.3, colorsToShade[color]),
}));

const combinedShadedColors = shadedColors.reduce((acc, cur) => Object.assign(acc, cur), {});

const colors = {
  type: '#222222',

  grayTint: '#C0C0C0',
  grayTintLight: '#ECECEC',
  grayTintLightDark: '#C0C0C0',
  grayTintDark: '#767676',

  white: '#fff',
  darkness: '#222222',
  darknessLight: '#453d3f',

  button: {
    background: '#ececec',
    color: '#333333',
  },

  ...combinedShadedColors,
};

export default colors;
