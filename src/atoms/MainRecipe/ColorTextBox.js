import styled from 'styled-components';
import { Col } from '../../atoms/Col';

const ColorTextBox = styled(Col)`
    padding: 8rem 12rem;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
    font-size: 2.7rem;
    line-height: 4.3rem;
	font-weight: 300;
	letter-spacing: .05rem;
	text-align: center;
	justify-content: center;
	color: ${props => props.theme.colors[props.textColor]};
	background-color: ${props => props.theme.colors[props.bgColor]};

	@media screen and (max-width: ${props => props.theme.flexboxgrid.breakpoints.md}em) {
		padding: 9rem;
		font-size: 5.4rem;
		line-height: 1.7;
		text-align: left;
		font-weight: 300;
    	letter-spacing: 3px;
 	}
`;

ColorTextBox.defaultProps = {
	textColor: 'white',
	bgColor: 'primary',
};


export { ColorTextBox };
