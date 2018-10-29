/* eslint-disable import/prefer-default-export */

import styled from 'react-emotion';
import propTypes from 'prop-types';

export const DemoContainer = styled.article`
	padding: 3rem;
	background: ${props => props.background};
	margin-bottom: 2rem;

	&:after {
		content: " ";
		clear: both;
		display: table;
	}
`;
DemoContainer.displayName = 'DemoContainer';

DemoContainer.defaultProps = {
	background: '#f9f9f9',
};

DemoContainer.propTypes = {
	background: propTypes.string,
};
