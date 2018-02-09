import Styled from 'styled-components';

const Description = Styled.div`
	color: ${props => props.theme.colors[props.textColor]};
	text-align: center;
	margin: ${props => props.theme.variables.headingMediumSize} 0;
	background-color: ${props => props.theme.colors[props.bgColor]};
	height: 100%;
	width: 100%;
	
	& span {
		display: inline-block;
		margin: ${props => props.theme.variables.headingHugeSize} 0;
		width: 60%;
		font-size: 20px;
		font-weight: 500;
	}
`;

Description.defaultProps = {
	textColor: 'white',
	bgColor: 'primary',
};

export { Description };
