import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

import config, { DIMENSION_NAMES } from '../utils/grid-config';

const mediaQ = gridProps => (props) => {
	const dimensions = DIMENSION_NAMES.map(
		(t) => {
			if (!config(gridProps).container[t]) {
				return '';
			}

			return config(gridProps).media[t]`
				width: ${config(props).container[t]}rem;
			`;
		}
	);

	return css`${dimensions}`;
};

const Grid = styled('div')`
  margin-right: auto;
  margin-left: auto;
  ${(gridProps) => {
		if (gridProps.fluid) {
			return props => css`
				padding-right: ${config(props).outerMargin}rem};
				padding-left:  ${config(props).outerMargin}rem};
			`;
	   }

	   return mediaQ(gridProps);
	}}
`;

Grid.displayName = 'Grid';

Grid.propTypes = {
	fluid: PropTypes.bool,
	children: PropTypes.node,
};

export { Grid };
