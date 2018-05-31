import propTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from './Button';
import { isBright } from '../utils/luminance';

const calculateTextColor = (theme, backgroundColor=theme.colors.primary) => (
	isBright(backgroundColor)
		? theme.colors.grayTintDark
		: theme.colors.white
);

const BorderedButton = styled(Button)`
	color: ${props => props.theme.colors.grayTintDark};
	border-radius: 0.3rem;
	border: solid 0.1rem ${props => props.theme.colors.grayTint};
	transition-property: color, background-color, border-color;
	background-color: transparent;
	font-weight: 500;
	letter-spacing: 0;
	outline: none;

	${props => props.isActive && (`
		border-color: ${props.theme.colors.primary};
		background-color: ${props.isActive && (props.theme.colors.primary)};
		color: ${props.isActive && calculateTextColor(props.theme)};
	`)};

	&:hover, &:active{
		border-color: ${props => props.theme.colors.primary};
		background-color: ${props => props.theme.colors.primary};
		color: ${props => calculateTextColor(props.theme)};
	};
`;

BorderedButton.defaultProps = {
	ALLCAPS: true,
};
BorderedButton.propTypes = {
	ALLCAPS: propTypes.bool,
};

module.exports = { BorderedButton };
