import styled from 'styled-components';
import { Col } from '../..';

const Description = styled(Col)`
	padding: 2rem;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	font-size: 2.0rem;
	line-height: 2.4rem;
	font-weight: 500;
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
