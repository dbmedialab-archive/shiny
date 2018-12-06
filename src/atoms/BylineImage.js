import styled from '@emotion/styled';

const BylineImage = styled.img`
	width: calc(3 * ${props => props.theme.variables.headingSmallLineHeight});
	height: calc(3 * ${props => props.theme.variables.headingSmallLineHeight});
	border-radius: 50%;
	display: inline-block;
	margin: ${props => `
		calc(-3/2 * ${props.theme.variables.headingSmallLineHeight})
		calc(1/2 * ${props.theme.variables.horizontalBase})
		0
		${props.theme.variables.horizontalBase}
	`};
	position: relative;
	box-sizing: border-box;
	box-shadow: 0 .1rem .4rem 0 rgba(0, 0, 0, 0.37);
`;

export { BylineImage };
