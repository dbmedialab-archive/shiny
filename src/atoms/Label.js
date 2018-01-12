import styled from 'styled-components';

const Label = styled.span`
	background-color: ${props => (
		props.theme.colors[props.color] || props.theme.colors[props.theme.colors.skinColors.splashBackground]
	)};
	color: ${props => (
		props.theme.colors[props.textColor] || props.theme.colors[props.theme.colors.skinColors.splashText]
	)};
	display: inline-block;
	font-family: ${props => props.theme.variables.headingsFont};
	font-size: 1.1rem;
	font-weight: 300;
	letter-spacing: .1rem;
	line-height: 1;
	margin-bottom: auto;
	margin-right: .1rem;
	padding: 0.25rem 0.5rem 0.25rem;
	position: relative;
	text-align: center;
	text-decoration: none;
	text-transform: uppercase;
	white-space: nowrap;
`;

Label.defaultProps = {
	color: 'primary',
};

export { Label };
