import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

import config, { DIMENSION_NAMES } from '../utils/grid-config';

const mediaQ = gridProps => (props) => {
	console.log('DIMENSION_NAMES', DIMENSION_NAMES);
	console.log('gridProps', gridProps);
	console.log('props', props);
	const dimensions = DIMENSION_NAMES.map(
		(t) => {
			if (!config(gridProps).container[t]) {
				console.log('NO: config(gridProps).container[t]', config(gridProps), config(gridProps).container, config(gridProps).container[t]);
				console.log('t?????', t);
				return '';
			}

			return config(gridProps).media[t]`
				width: ${config(props).container[t]}rem;
			`;
		}
	);
	console.log('dimensions', dimensions);
	return css`${dimensions}`;
};

const Grid = styled('div')`
	margin-right: auto;
	margin-left: auto;

  ${(gridProps) => {
	  console.log('gridProps.fluid', gridProps.fluid);
		if (gridProps.fluid) {
			return (props) => {
				const configProps = config(props);
				console.log(`configProps: ${JSON.stringify(configProps)}`);

				return css`
				padding-right: ${configProps.outerMargin}rem};
				padding-left:  ${configProps.outerMargin}rem};
			`;
			};
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
