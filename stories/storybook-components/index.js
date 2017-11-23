/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';
import propTypes from 'prop-types';

import SiteSelection from './SiteSelection';

export { SiteSelection };

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

DemoContainer.defaultProps = {
	background: '#f9f9f9',
};

DemoContainer.propTypes = {
	background: propTypes.string,
};
