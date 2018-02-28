import styled from 'styled-components';
import { Col } from '../../atoms/Col';

const Description = styled(Col)`
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
	color: ${props => props.theme.colors[props.textColor]};
	background-color: ${props => props.theme.colors[props.bgColor]};

	@media screen and (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
		padding: 2rem 10rem;
 	}
`;

Description.defaultProps = {
	textColor: 'white',
	bgColor: 'primary',
};


export { Description };
