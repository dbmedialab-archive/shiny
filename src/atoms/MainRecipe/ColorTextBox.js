import styled from 'styled-components';
import { Col } from '../../atoms/Col';
import { getColor } from '../../utils';

const ColorTextBox = styled(Col)`
	padding: 3rem;
	font-size:   ${props => props.theme.variables.headingRegularSize};
	line-height: ${props => props.theme.variables.headingRegularLineHeight};
	font-weight: 500;
	letter-spacing: .05rem;
	word-wrap: break-word;
	text-align: left;
	color: ${props => getColor(props.textColor)};
	background-color: ${props => getColor(props.bgColor)};
	width: 100%;
	height: 100%;
	
	@media screen and (min-width: ${props => props.theme.flexboxgrid.breakpoints.md}em) {
		padding: 7rem 10rem;
	}
`;

ColorTextBox.defaultProps = {
	textColor: 'white',
	bgColor: 'primary',
};


export { ColorTextBox };
