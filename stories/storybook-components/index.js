/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';
import propTypes from 'prop-types';

import SiteSelection from './SiteSelection';

export { SiteSelection };

export const StoryBox = styled.section`
	max-width: 110rem;
	padding: 5rem 0 0 2rem;
`;

export const DemoContainer = styled.article`
	padding: 3rem;
	background: ${props => props.background};
	margin-bottom: 2rem;
`;

DemoContainer.defaultProps = {
	background: '#f9f9f9',
};

DemoContainer.propTypes = {
	background: propTypes.string,
};
