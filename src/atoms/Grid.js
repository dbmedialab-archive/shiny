import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

import config, { DIMENSION_NAMES } from '../utils/grid-config';

const Grid = styled.div`g
  margin-right: auto;
  margin-left: auto;
  padding-right: ${p => `${config(p).outerMargin}rem`};
  padding-left: ${p => `${config(p).outerMargin}rem`};
  ${p => !p.fluid && css`
    ${DIMENSION_NAMES.map(t => config(p).container[t] && config(p).media[t]`
        width: ${p => config(p).container[t]}rem;
      `)}
  `}
`;

Grid.displayName = 'Grid';

Grid.propTypes = {
	fluid: PropTypes.bool,
	children: PropTypes.node,
};

export { Grid };
