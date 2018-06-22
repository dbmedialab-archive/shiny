import propTypes from 'prop-types';
import styled from 'styled-components';
import { getColor } from '../utils';

const Button = styled.button`
	letter-spacing: .1rem;
	text-transform: uppercase;
	background-color: ${props => getColor(props.background)};
	border-color: #bdbdbd;
	color: ${props => getColor(props.textColor)};
	border-style: solid;
	border-width: 0;
	cursor: pointer;
	font-weight: 700;
	line-height: normal;
	margin: 0 0.25rem 1.25rem;
	position: relative;
	text-decoration: none;
	text-align: center;
	border-radius: ${props => props.borderRadius};
	display: inline-block;
	padding-top: 0.7rem;
	padding-right: 1.4rem;
	padding-bottom: 0.7625rem;
	padding-left: 1.4rem;
	font-size: 0.9rem;
	transition: background-color 300ms ease-out;
	${props => (props.ALLCAPS && 'text-transform: uppercase')};

	${props => props.outline && `
		border: .1rem solid ${getColor(props.background)};
		background: transparent;
		color: ${props.background};
	`}
`;

Button.defaultProps = {
	background: 'grayTintLight',
	textColor: 'type',
	borderRadius: 0,
	ALLCAPS: false,
};


Button.propTypes = {
	background: propTypes.string,
	textColor: propTypes.string,
	ALLCAPS: propTypes.bool,
};

export { Button };
