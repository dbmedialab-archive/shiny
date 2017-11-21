/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';
import propTypes from 'prop-types';

export const StoryBox = styled.section`
	max-width: 110rem;
	padding: 5rem 0 0 2rem;
`;

export const StoryTitle = styled.h1`
	font-family: ${props => props.theme.variables.mainFont};
	font-size: ${props => props.theme.variables.headingHugeSize};
	line-height: ${props => props.theme.variables.headingHugeLineHeight};
	border-bottom: .1rem solid ${props => props.theme.colors.grayTint};
	margin: 0 0 ${props => props.theme.variables.verticalBase});
`;

export const StorySubtitle = styled.h2`
	font-family: ${props => props.theme.variables.mainFont};
	font-size: ${props => props.theme.variables.headingRegularSize};
	line-height: ${props => props.theme.variables.headingRegularLineHeight};
	padding: 0;
	font-weight: 600;
	text-transform: uppercase;
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
