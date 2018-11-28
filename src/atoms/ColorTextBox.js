import styled from 'react-emotion';
import { Col } from './Col';
import { getColor, getVariable } from '../utils';

const ColorTextBox = styled(Col)`
	padding: calc(3/2 * ${getVariable('verticalBase')}) calc(3 * ${getVariable('horizontalBase')});
	font-size:   ${getVariable('headingRegularSize')};
	line-height: ${getVariable('headingRegularLineHeight')};
	font-weight: ${getVariable('uiWeightSemiBold')};
	letter-spacing: .05rem;
	word-wrap: break-word;
	text-align: left;
	color:            ${props => getColor(props.textColor)};
	background-color: ${props => getColor(props.bgColor)};
	width: 100%;
	height: 100%;

	display: flex;
	align-items: center;

	@media screen and (min-width: ${props => props.theme.flexboxgrid.breakpoints.md}em) {
		padding: calc(4 * ${getVariable('verticalBase')}) calc(7 * ${getVariable('horizontalBase')});
	}
`;

ColorTextBox.defaultProps = {
	textColor: 'white',
	bgColor: 'primary',
};


export { ColorTextBox };
