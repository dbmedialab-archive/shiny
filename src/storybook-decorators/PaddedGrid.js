import PropTypes from 'prop-types';
import React from 'react';
import styled from 'react-emotion';

import { Grid } from '..';

export const PaddedDiv = styled.div`
	padding-top: calc(2*${props => props.theme.variables.verticalBase});
	padding-bottom: calc(2*${props => props.theme.variables.verticalBase});
`;

const PaddedGrid = ({ children }) => (
	<Grid>
		<PaddedDiv>
			{children}
		</PaddedDiv>
	</Grid>
);


PaddedGrid.propTypes = {
	children: PropTypes.node,
};


PaddedGrid.defaultProps = {
	children: null,
};


const StorybookPaddedGrid = stories => <PaddedGrid>{stories()}</PaddedGrid>;

export { StorybookPaddedGrid };
