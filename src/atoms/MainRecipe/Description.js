import styled from 'styled-components';
import { Col } from '../..';

const Description = styled(Col)`
	padding: 10% 20%;
	width: 100%;
	height: 100%;

	font-size: 2.0rem;
	line-height: 2.4rem;
	font-weight: 500;

	text-align: center;

	color: ${props => props.theme.colors[props.textColor]};
	background-color: ${props => props.theme.colors[props.bgColor]};
`;

Description.defaultProps = {
	textColor: 'white',
	bgColor: 'primary',
};

export { Description };
