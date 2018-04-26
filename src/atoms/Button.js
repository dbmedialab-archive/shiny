import propTypes from 'prop-types';
import styled from 'styled-components';
import { getColor } from '../utils';

const Button = styled.button`
	letter-spacing: .1rem;
	text-transform: uppercase;
	background-color: ${props => (props.background? getColor(props.background): props.theme.colors.button.background)};
	border-color: #bdbdbd;
	color: ${props => (props.textColor? getColor(props.textColor): props.theme.colors.button.color)};
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
		border: .1rem solid ${props.background? getColor(props.background):  props.theme.colors.button.background};
		background: transparent;
		color: ${props.background? getColor(props.background): props.theme.colors.button.background};
	`}
`;

Button.defaultProps = {
	borderRadius: 0,
};


Button.propTypes = {
	background: propTypes.string,
	textColor: propTypes.string,
	ALLCAPS: false,
};

export { Button };
