import styled from 'styled-components';

const BylineName = styled.span`
	font-size: ${props => props.theme.variables.headingSmallSize};
	line-height: ${props => props.theme.variables.headingSmallLineHeight};
	font-weight: 300;
	padding: 0;
	text-transform: uppercase;
	display: inline-block;
	position: relative;
	margin-top: 0;
	top: calc(-1/2 * ${props => props.theme.variables.verticalBase});
`;

export { BylineName };
