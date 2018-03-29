import styled from 'styled-components';
import { Col } from '../../atoms/Col';

const ColorTextBox = styled(Col)`
	padding: 2rem;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	font-size:   ${props => props.theme.variables.headingRegularSize};
	line-height: ${props => props.theme.variables.headingRegularLineHeight};
	font-weight: 600;
	letter-spacing: .05rem;
	text-align: center;
	justify-content: center;
	color: ${props => props.theme.colors[props.textColor]};
	background-color: ${props => props.theme.colors[props.bgColor]};

	@media screen and (max-width: ${props => props.theme.flexboxgrid.breakpoints.md}em) {
		padding: 9rem 16rem;
		font-size: 5rem;
		line-height: 1.4;
		text-align: left;
 	}
`;

ColorTextBox.defaultProps = {
	textColor: 'white',
	bgColor: 'primary',
};


export { ColorTextBox };
