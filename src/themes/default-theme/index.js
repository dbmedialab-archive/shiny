import variables from './variables';
import colors from './colors';
import grid from './grid';

const global = `
  background: #fff;
  color: #222;
  padding: 0;
  margin: 0;
  font-family: "Roboto","Helvetica",Helvetica,Arial,sans-serif;
  font-weight: 300;
  font-style: normal;
  line-height: 1.5;
  position: relative;
  cursor: auto;
`;

const theme = {
  name: 'Default',
  global,
  colors,
  grid,
  variables,
};

export default theme;
